// StatsSection — 4 stat cards: sedes, auditoría, años, afiliados
// Server component — animations via CSS .reveal class
export default function MetricasSection() {
  return (
    <section className="stats">
      <div className="reveal">
        <h2 className="section-title upper">NUESTRA TRAYECTORIA</h2>
      </div>

      <div className="stats-grid">
        {/* Sedes */}
        <div className="stat-card reveal">
          <div className="stat-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="stat-num">5</div>
          <div className="stat-label">NUESTRAS SEDES</div>
        </div>

        {/* Auditoría */}
        <div className="stat-card reveal">
          <div className="stat-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="stat-num">100%</div>
          <div className="stat-label">AUDITORÍA MÉDICA</div>
        </div>

        {/* Años */}
        <div className="stat-card reveal">
          <div className="stat-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="stat-num">16</div>
          <div className="stat-label">AÑOS DE GESTIÓN</div>
        </div>

        {/* Afiliados */}
        <div className="stat-card reveal">
          <div className="stat-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="stat-num">+1000</div>
          <div className="stat-label">AFILIADOS ACTIVOS</div>
        </div>
      </div>
    </section>
  );
}
