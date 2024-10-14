import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import img4 from '../../../assets/imagenes/img4.jpg'

const About = ()=>{
    return (
      <section className="about-section text-white" style={{ backgroundImage: `url(${img4.src})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
        <div className="container">
          <header>
            <h1 >Sobre Nosotros</h1>
            <p className="text-muted">Conoce la historia y los valores de nuestra tienda en línea.</p>
          </header>
    <br />
    <br />
          <section className="history">
            <h2>Nuestra Historia</h2>
            <p className="text-muted">
              Fundada en 2020, nuestra tienda comenzó con la misión de ofrecer productos de alta calidad a precios justos...
            </p>
          </section>
    
          <section className="mission-vision">
            <h2>Misión y Visión</h2>
            <p className="text-muted">
              <strong>Misión:</strong> Proporcionar productos innovadores que mejoren la vida diaria de nuestros clientes.
            </p>
            <p className="text-muted">
              <strong>Visión:</strong> Convertirnos en líderes del mercado de productos sostenibles y de calidad.
            </p>
          </section>
    
          <section className="values">
            <h2>Valores Fundamentales</h2>
            <ul>
              <li>Calidad: Nos comprometemos con los más altos estándares en cada producto.</li>
              <li>Sostenibilidad: Usamos materiales y procesos respetuosos con el medio ambiente.</li>
              <li>Innovación: Estamos en constante búsqueda de nuevas ideas y mejoras.</li>
            </ul>
          </section>
    
          <section className="team">
            <h2>Conoce al Equipo</h2>
            <div className="team-members">
              <div className="team-member">
                <img src="" alt="Team Member 1" />
                <h3>Jane Doe</h3>
                <p className="text-muted">CEO y Fundadora</p>
              </div>
              {/* Agrega más miembros del equipo aquí */}
            </div>
          </section>
    
          <section className="contact">
            <h2>Contáctanos</h2>
            <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros a través de <a href="mailto:info@tienda.com">info@tienda.com</a>.</p>
          </section>
        </div>
        </section>
      );
}

export default About;