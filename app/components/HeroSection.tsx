"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";

// Cloudinary public ID — hero background (landscape ~16:9, cuidadora con adulto mayor)
const HERO_BG_ID = "mas-cuidados/hero-bg";

type Status = "idle" | "loading" | "success" | "error";

export default function HeroSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Validación cliente — resalta campos vacíos requeridos
    let valid = true;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      "input[required], select[required]"
    ).forEach((el) => {
      const wrap = el.closest(".field");
      if (!el.value.trim()) { wrap?.classList.add("error"); valid = false; }
      else wrap?.classList.remove("error");
    });
    if (!valid) return;

    setStatus("loading");
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Error al enviar.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Hubo un error. Intentá de nuevo.");
    }
  }

  return (
    <header className="hero" id="contacto">
      {/* Background photo */}
      <div className="hero-bg">
        <CldImage
          src={HERO_BG_ID}
          alt="Cuidadora profesional acompañando a adulto mayor"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className="hero-inner">
        {/* Left — marca y titular */}
        <div>
          <div className="hero-logo">
            <span className="mark" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <span>
              <span className="wordmark">Más<span style={{ color: "#F7B2D9" }}>Cuidados</span></span>
              <span className="tag">CUANDO MÁS NOS NECESITÁS</span>
            </span>
          </div>

          <h1>
            Cuidadoras y acompañantes capacitados para{" "}
            <span className="accent-pink">Sanatorios y Domicilios</span>
          </h1>
          <hr />
          <p className="lede">
            Atención 24 hs, respuesta inmediata y la experiencia de un equipo que acompaña con compromiso desde 2010.
          </p>
        </div>

        {/* Right — form card */}
        <aside className="form-card" aria-labelledby="form-title">
          {status === "success" ? (
            <div className="form-success">
              <div className="check">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4>¡Recibimos tu solicitud!</h4>
              <p>En breve un asesor se va a comunicar con vos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="form-title" id="form-title">
                Solicitar <em>una cuidadora</em>
              </h2>
              <p className="form-sub">Completá el formulario y te asesoramos.</p>

              <div className="field">
                <input type="text" name="nombre" placeholder="Nombre y apellido" required />
              </div>
              <div className="field">
                <input type="tel" name="telefono" placeholder="Teléfono" required />
              </div>
              <div className="field">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="field">
                <input type="text" name="ciudad" placeholder="Ciudad" required />
              </div>
              <div className="field select">
                <select name="servicio" required defaultValue="">
                  <option value="" disabled>Servicio</option>
                  <option>Cuidadora a domicilio</option>
                  <option>Cuidadora en sanatorio</option>
                  <option>Cuidador profesional</option>
                  <option>Beneficios premium</option>
                  <option>No estoy seguro</option>
                </select>
              </div>

              <button className="submit" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Enviando…" : "¡Quiero que me contacten!"}
              </button>

              {status === "error" && (
                <p className="form-error-msg">{errorMsg}</p>
              )}

              <p className="form-foot">
                Tus datos cumplen Términos, son tratados con privacidad. Política de privacidad.
              </p>

              <div className="form-badges">
                <div className="form-badge">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.85.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.88.35 1.8.59 2.73.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="label">ATENCIÓN<br />24 / 7</div>
                </div>
                <div className="form-badge">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="label">RESPALDO<br />PROFESIONAL</div>
                </div>
                <div className="form-badge">
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div className="label">+15 AÑOS<br />CUIDANDO</div>
                </div>
              </div>
            </form>
          )}
        </aside>
      </div>
    </header>
  );
}
