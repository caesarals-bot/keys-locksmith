import { NavBarGuitarLA } from "../ui/NavBarGuitarLA"
import styles from '../../styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer} >
        <div className={`contenedor ${styles.contenido}`} >
            <NavBarGuitarLA 
              className="navegacion"
            />
            
            <p className={styles.copyright}>Todos Los Derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}
