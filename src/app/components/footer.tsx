'use client';

export const Footer = ()=>{

return (<>
<footer
  className="ecommerce-footer text-white mt-auto"
  style={{ backgroundColor: '#0D6EFD', padding: '20px 0' }}
>
  <div className="container text-center">
    <p className="mb-2">&copy; 2025 MiTienda. Todos los derechos reservados.</p>
    <div className="d-flex justify-content-center gap-4">
      <a href="#" className="text-white text-decoration-none">Privacidad</a>
      <a href="#" className="text-white text-decoration-none">Términos</a>
      <a href="#" className="text-white text-decoration-none">Contacto</a>
    </div>
  </div>
</footer>

</>)
}

