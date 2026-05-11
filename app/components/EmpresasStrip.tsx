// TrustStrip — "Empresas que confían en nosotros"
// Server component — no interactivity needed
export default function EmpresasStrip() {
  return (
    <section className="trust">
      <p className="trust-title">EMPRESAS QUE CONFÍAN EN NOSOTROS</p>
      <div className="trust-bar">
        <div className="logo-cell">
          <span className="text-logo" style={{ color: "#005EB8" }}>
            O<span style={{ color: "#E30613" }}>·</span>S<span style={{ color: "#E30613" }}>·</span>D<span style={{ color: "#E30613" }}>·</span>E
          </span>
        </div>
        <div className="logo-cell">
          <span className="text-logo" style={{ color: "#D71920" }}>
            Med<span style={{ color: "#1A1A1A" }}>Cal</span>
          </span>
        </div>
        <div className="logo-cell">
          <span className="text-logo" style={{ color: "#7AB800" }}>▲ GALENO</span>
        </div>
        <div className="logo-cell">
          <span className="text-logo" style={{ color: "#0075BE" }}>●PAMI</span>
        </div>
        <div className="logo-cell">
          <span className="text-logo" style={{ color: "#E30B5D" }}>◆ Federada</span>
        </div>
        <div className="logo-cell">
          <span
            className="text-logo"
            style={{
              background: "#C8102E", color: "#fff",
              padding: "5px 10px", borderRadius: "3px",
              fontSize: "13px", letterSpacing: ".05em",
            }}
          >
            Esencial
          </span>
        </div>
      </div>
    </section>
  );
}
