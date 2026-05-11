import { CldImage } from "next-cloudinary";

// Cloudinary public ID — family photo (~4:3)
const FAMILIA_IMG = "mas-cuidados/familia-testimonios";

const testimonios = [
  {
    quote: "Excelente predisposición y calidad humana en cada cuidadora que nos enviaron. Son más de lo que esperábamos.",
    name:  "FAMILIA RODRÍGUEZ",
    loc:   "ROSARIO",
  },
  {
    quote: "La coordinación fue rápida y el seguimiento permanente. Sentimos que realmente se preocupan por nuestro familiar.",
    name:  "MARTÍN G.",
    loc:   "BUENOS AIRES",
  },
  {
    quote: "Gracias al equipo de Más Cuidados mi mamá recibe atención de calidad todos los días. Son verdaderos profesionales.",
    name:  "FAMILIA PEREYRA",
    loc:   "CÓRDOBA",
  },
];

export default function TestimoniosSection() {
  return (
    <section className="testimonials">
      <div className="test-inner">
        {/* Left — heading + cards */}
        <div>
          <div className="test-head reveal">
            <h2>Lo que dicen las familias que<br />confían en <span style={{ color: "var(--pink)" }}>Más Cuidados</span></h2>
            <p>
              Más de <strong>+1000 familias</strong> ya eligieron nuestro servicio en todo el país.
            </p>
          </div>

          <div className="test-cards">
            {testimonios.map((t, i) => (
              <div key={i} className="test-card reveal">
                {/* Stars */}
                <div style={{ color: "#E91E8C", fontSize: 14, marginBottom: 10, letterSpacing: 2 }}>
                  ★★★★★
                </div>
                <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
                <p className="test-name">{t.name}</p>
                <p className="test-loc">{t.loc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — family photo */}
        <div className="test-photo reveal">
          <CldImage
            src={FAMILIA_IMG}
            alt="Familia atendida por Más Cuidados"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Closing card */}
      <div className="closing reveal">
        <div className="closing-brand">
          <div className="mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <div>
            <div className="name">Más<span>Cuidados</span></div>
            <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".12em", fontWeight: 600 }}>CUANDO MÁS NOS NECESITÁS</div>
          </div>
        </div>

        <div className="closing-body">
          <p>
            Somos el equipo de cuidado profesional que acompaña a tu familia con respaldo médico, coordinación inmediata y presencia en todo el país.
          </p>
          <div className="closing-contact">
            <a href="tel:+5491100000000">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.85.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.88.35 1.8.59 2.73.72A2 2 0 0 1 22 16.92z" />
              </svg>
              +54 9 11 0000-0000
            </a>
            <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href="mailto:info@mascuidados.com.ar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@mascuidados.com.ar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
