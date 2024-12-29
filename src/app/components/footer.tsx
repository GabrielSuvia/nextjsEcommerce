import styles from './footer.module.css'
export const Footer = ()=>{
    return (
        <footer className={styles.footer}>
          <div className="container">
            <p className={styles.pe}>
              &copy; {new Date().getFullYear()} Tu Tienda en Línea. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      );

}