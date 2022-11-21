import Link from "next/link"
import styles from '../../styles/NavBarGuitarLA.module.css'


export const NavBarGuitarLA = ({className='', style='', router}) => {

  
  return (
    <nav className={className ? className : styles.navigation}>
        <Link href="/">
          <a className={router === '/' ? styles.active : ''}>inicio</a>
        </Link>
        <Link href="/nosotros">
          <a className={router === '/nosotros' ? styles.active : ''}>Nosotros</a>
        </Link>
        <Link href="/contactanos">
          <a className={router === '/contactanos' ? styles.active : ''}>Contactanos</a>
        </Link>
        <Link href="/blog">
          <a className={router === '/blog' ? styles.active : ''}>Blog</a>
        </Link>
    </nav>
  )
}
