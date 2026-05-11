import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

/* -------------------------------------------------------
   Supabase client (server-side — uses service-role key)
   Table schema (run once in Supabase SQL editor):

   create table leads (
     id          uuid primary key default gen_random_uuid(),
     nombre      text not null,
     telefono    text not null,
     email       text,
     ciudad      text not null,
     servicio    text not null,
     created_at  timestamptz default now()
   );
------------------------------------------------------- */
function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key);
}

/* -------------------------------------------------------
   Runway email notification
   Adjust the payload shape to match Runway's actual API.
   Docs: https://docs.runway.team  (or your provider's docs)
------------------------------------------------------- */
async function sendRunwayEmail(data: {
  nombre: string;
  telefono: string;
  email: string;
  ciudad: string;
  servicio: string;
}) {
  const apiUrl = process.env.RUNWAY_API_URL;
  const apiKey = process.env.RUNWAY_API_KEY;
  const toEmail = process.env.NOTIFICATION_EMAIL;

  if (!apiUrl || !apiKey || !toEmail) {
    console.warn("Runway env vars missing — skipping email notification.");
    return;
  }

  const html = `
    <h2>Nueva solicitud de cuidadora 🩺</h2>
    <table cellpadding="6">
      <tr><td><strong>Nombre:</strong></td><td>${data.nombre}</td></tr>
      <tr><td><strong>Teléfono:</strong></td><td>${data.telefono}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${data.email || "—"}</td></tr>
      <tr><td><strong>Ciudad:</strong></td><td>${data.ciudad}</td></tr>
      <tr><td><strong>Servicio:</strong></td><td>${data.servicio}</td></tr>
    </table>
  `;

  await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: toEmail,
      subject: `Nueva solicitud — ${data.nombre} (${data.ciudad})`,
      html,
      // Adjust fields to match Runway's schema if needed
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, telefono, email, ciudad, servicio } = body as Record<string, string>;

    // Basic validation
    if (!nombre?.trim() || !telefono?.trim() || !ciudad?.trim() || !servicio?.trim()) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    const lead = { nombre: nombre.trim(), telefono: telefono.trim(), email: email?.trim() ?? "", ciudad: ciudad.trim(), servicio: servicio.trim() };

    // Run Supabase insert + Runway email in parallel
    const [supabaseResult] = await Promise.allSettled([
      getSupabase().from("leads").insert(lead),
      sendRunwayEmail(lead),
    ]);

    if (supabaseResult.status === "rejected") {
      console.error("Supabase insert failed:", supabaseResult.reason);
      return NextResponse.json({ error: "No se pudo guardar el lead." }, { status: 500 });
    }

    const { error: dbError } = supabaseResult.value as { error: unknown };
    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Error al guardar los datos." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
