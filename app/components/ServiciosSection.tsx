import { CldImage } from "next-cloudinary";

// Cloudinary public IDs — service card photos (~4:3 ratio, care scenes)
const IMG_CUIDADORA   = "mas-cuidados/servicio-cuidadora";    // cuidadora con adulto mayor en domicilio
const IMG_PROFESIONAL = "mas-cuidados/servicio-profesional";  // cuidador profesional en sanatorio
const IMG_PREMIUM     = "mas-cuidados/servicio-premium";      // equipo de cuidado integral

export default function ServiciosSection() {
  return (
    <section className="services" id="servicios">
      <div className="services-head reveal">
        <h2 className="section-title upper">NUESTRO SERVICIO DE CUIDADO INMEDIATO</h2>
        <p className="section-sub">
          En <strong>Más Cuidados</strong> activamos el servicio{" "}
          <strong>en el día</strong>, con cuidadores capacitados y respaldo profesional.
        </p>
      </div>

      <div className="service-list">
        {/* Card 1 — imagen izquierda */}
        <article className="service reveal">
          <div className="service-img">
            <CldImage
              src={IMG_CUIDADORA}
              alt="Cuidadora acompañando a adulto mayor"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="service-body">
            <p className="service-tag">EN DOMICILIO O SANATORIO</p>
            <h3 className="service-title">Cuidadora / Acompañante</h3>
            <ul>
              <li>Cobertura en domicilio y sanatorios</li>
              <li>Coordinación rápida y eficiente</li>
              <li>Cuidadores capacitados</li>
              <li>Supervisión de enfermería</li>
              <li>Auditorías médicas</li>
            </ul>
            <a href="#contacto" className="btn-pink">SOLICITÁ TU CUIDADORA</a>
          </div>
        </article>

        {/* Card 2 — imagen derecha (reverse) */}
        <article className="service reverse reveal">
          <div className="service-img">
            <CldImage
              src={IMG_PROFESIONAL}
              alt="Cuidador profesional en sanatorio"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="service-body">
            <p className="service-tag">ATENCIÓN ESPECIAL CASA</p>
            <h3 className="service-title">Cuidador profesional</h3>
            <ul>
              <li>Higiene y confort, asistencia diaria</li>
              <li>Administración de medicación</li>
              <li>Acompañamiento y seguimiento</li>
              <li>Apoyo en terapia y rehabilitación</li>
              <li>Seguridad y cuidado del entorno</li>
            </ul>
            <a href="#contacto" className="btn-pink">SOLICITAR SERVICIO AHORA</a>
          </div>
        </article>

        {/* Card 3 — imagen izquierda */}
        <article className="service reveal">
          <div className="service-img">
            <CldImage
              src={IMG_PREMIUM}
              alt="Beneficios premium de Más Cuidados"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="service-body">
            <p className="service-tag">EXPERIENCIA INTEGRAL</p>
            <h3 className="service-title">Beneficios Premium incluidos</h3>
            <ul>
              <li>Cuidadora o Enfermero</li>
              <li>Consultas médicas por videollamada</li>
              <li>Recetas digitales con médico</li>
              <li>Solicitud de análisis clínicos digital inmediato</li>
              <li>Ecografías y rayos X a domicilio</li>
              <li>Enfermería en nuestras sedes</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
