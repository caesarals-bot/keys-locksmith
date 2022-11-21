import Image from "next/image";
import Link from "next/link";
import styles from '../../../styles/iconscontactBar.module.css'


export default function ContactBar() {
  return (
    <div className={styles['container-icons-contact']}>
        <Link href="">
            <a>
                <Image 
                    src='/contacto/email.svg'
                    alt="Correo"
                    width={50}
                    height={48}
                />
            </a>
        </Link>
        <Link href="">
            <a>
                <Image 
                    src='/contacto/whatsap.svg'
                    alt="whatsapp"
                    width={50}
                    height={48}
                />
            </a>
        </Link>
        <Link href="">
            <a>
                <Image 
                    src='/contacto/instagram.svg'
                    alt="instagram"
                    width={47}
                    height={47}
                />
            </a>
        </Link>
        <Link href="">
            <a>
                <Image 
                    src='/contacto/facebook.svg'
                    alt="facebook"
                    width={47}
                    height={47}
                />
            </a>
        </Link>
    </div>
  )
}
