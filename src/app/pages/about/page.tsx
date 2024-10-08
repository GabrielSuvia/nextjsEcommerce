
const About = ()=>{
    return (
        <div className="about-container">
          <header>
            <h1>Sobre Nosotros</h1>
            <p>Conoce la historia y los valores de nuestra tienda en línea.</p>
          </header>
    
          <section className="history">
            <h2>Nuestra Historia</h2>
            <p>
              Fundada en 2020, nuestra tienda comenzó con la misión de ofrecer productos de alta calidad a precios justos...
            </p>
          </section>
    
          <section className="mission-vision">
            <h2>Misión y Visión</h2>
            <p>
              <strong>Misión:</strong> Proporcionar productos innovadores que mejoren la vida diaria de nuestros clientes.
            </p>
            <p>
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
                <p>CEO y Fundadora</p>
              </div>
              {/* Agrega más miembros del equipo aquí */}
            </div>
          </section>
    
          <section className="contact">
            <h2>Contáctanos</h2>
            <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros a través de <a href="mailto:info@tienda.com">info@tienda.com</a>.</p>
          </section>
        </div>
      );
}

export default About;