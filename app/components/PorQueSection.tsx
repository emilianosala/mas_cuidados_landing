// PorQueSection — "¿Por qué elegir Más Cuidados?" + CABA coverage banner
// Server component — animations via CSS .reveal class
export default function PorQueSection() {
  return (
    <section className="why" id="porque">
      <div className="reveal">
        <h2 className="section-title upper">¿POR QUÉ ELEGIR MÁS CUIDADOS?</h2>
      </div>

      <div className="why-grid">
        <div className="why-card reveal">
          <div className="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 2 13 10 21 10" />
              <path d="M20.84 14.61A9 9 0 1 1 9.39 3.16" />
            </svg>
          </div>
          <p className="why-title">Respuesta Rápida</p>
          <p className="why-desc">Activamos el servicio en el mismo día, sin esperas ni demoras innecesarias.</p>
        </div>

        <div className="why-card reveal">
          <div className="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="why-title">Equipo Profesional</p>
          <p className="why-desc">Cuidadores capacitados con supervisión de enfermería y auditoría médica.</p>
        </div>

        <div className="why-card reveal">
          <div className="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.85.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.88.35 1.8.59 2.73.72A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <p className="why-title">Guardia Telefónica 24/7</p>
          <p className="why-desc">Atención permanente, los 365 días del año, para cualquier urgencia.</p>
        </div>

        <div className="why-card reveal">
          <div className="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <p className="why-title">Atención Personalizada</p>
          <p className="why-desc">Coordinamos según las necesidades de tu familia, con seguimiento cercano.</p>
        </div>
      </div>

      {/* CABA coverage banner */}
      <div className="caba">
        <div className="caba-inner">
          <div className="caba-text reveal">
            <h3 className="caba-locations">ESTAMOS EN CABA, ROSARIO, CÓRDOBA, SANTA FE, PARANÁ</h3>
            <p className="caba-q">¿NECESITÁS UN CUIDADOR HOY?</p>
            <p className="caba-p">
              Completá el formulario y te ayudamos a coordinar el cuidado que necesitás, lo antes posible.
            </p>
            <a href="#contacto" className="btn-pink lg">QUIERO UN CUIDADOR AHORA</a>
          </div>

          <div className="caba-map">
            {/* Stylised Argentina silhouette with highlighted provinces */}
            <svg viewBox="0 0 220 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="argG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#A77DD0" />
                  <stop offset="1" stopColor="#5B3680" />
                </linearGradient>
              </defs>
              <path fill="url(#argG)" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.55" strokeLinejoin="round" d="
                M 88 14 C 96 10, 108 12, 116 16 C 124 14, 134 18, 138 24 C 150 26, 156 34, 158 44
                C 168 50, 174 58, 170 66 C 178 70, 186 78, 184 88 C 178 94, 168 94, 162 92
                C 158 100, 152 108, 146 116 C 148 128, 146 140, 140 148 C 144 156, 142 168, 134 174
                C 138 184, 134 196, 126 202 C 130 214, 124 224, 116 230 C 120 244, 112 256, 104 262
                C 110 274, 102 286, 94 290 C 98 302, 90 312, 82 314 C 86 326, 76 336, 68 334
                C 64 342, 56 342, 54 334 C 50 326, 56 318, 52 310 C 56 300, 64 296, 66 286
                C 60 278, 60 268, 66 262 C 60 254, 58 244, 64 238 C 58 230, 58 218, 64 212
                C 56 204, 56 192, 64 186 C 56 178, 58 166, 66 162 C 60 152, 64 142, 72 138
                C 66 128, 70 116, 78 112 C 72 100, 76 88, 82 82 C 78 70, 84 58, 88 52
                C 84 40, 86 26, 88 14 Z"
              />
              <path fill="url(#argG)" stroke="#fff" strokeWidth="1.2" strokeOpacity="0.55" strokeLinejoin="round" d="
                M 158 44 C 168 36, 178 38, 182 46 C 184 56, 176 60, 168 58 C 162 56, 158 50, 158 44 Z"
              />
              <g stroke="#fff" strokeWidth="0.6" strokeOpacity="0.22" fill="none">
                <path d="M 70 90 Q 120 92 160 96" />
                <path d="M 70 140 Q 120 142 150 146" />
                <path d="M 64 180 Q 100 184 140 188" />
                <path d="M 64 220 Q 100 222 130 226" />
                <path d="M 100 14 Q 102 130 88 250" />
              </g>
              {/* Córdoba */}
              <g>
                <circle cx="108" cy="178" r="7" fill="#E91E8C" fillOpacity="0.25" />
                <circle cx="108" cy="178" r="4" fill="#E91E8C" stroke="#fff" strokeWidth="1.2" />
              </g>
              {/* Santa Fe / Rosario */}
              <g>
                <circle cx="128" cy="180" r="7" fill="#E91E8C" fillOpacity="0.25" />
                <circle cx="128" cy="180" r="4" fill="#E91E8C" stroke="#fff" strokeWidth="1.2" />
              </g>
              {/* Entre Ríos / Paraná */}
              <g>
                <circle cx="144" cy="188" r="7" fill="#E91E8C" fillOpacity="0.25" />
                <circle cx="144" cy="188" r="4" fill="#E91E8C" stroke="#fff" strokeWidth="1.2" />
              </g>
              {/* CABA (verde neón) */}
              <g>
                <circle cx="136" cy="206" r="8" fill="#39FF14" fillOpacity="0.25" />
                <circle cx="136" cy="206" r="4.5" fill="#39FF14" stroke="#fff" strokeWidth="1.3" style={{ animation: "pulse 2s infinite" }} />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
