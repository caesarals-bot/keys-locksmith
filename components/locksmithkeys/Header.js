import { useRouter } from "next/router"
import Image from "next/future/image"
import Link from "next/link"

import styles from '../../styles/Header.module.css'
import { NavBarGuitarLA } from "../ui/NavBarGuitarLA"
import ContactBar from "../ui/iconsBarContacto/contactBar"



export const Header = () => {
    const router = useRouter()
    return (
        <header
            className={styles.header}
        >
            <div className="contenedor">
                <div className={styles.bar}>
                    <Link href='/'>
                        <a>
                            <Image
                                src="/img/logoterminadorectblanco.png"
                                alt="logo"
                                width={400}
                                height={40}
                            />
                        </a>
                    </Link>
                    <NavBarGuitarLA
                        router={router.pathname}
                    />
                    <ContactBar />
                </div>
            </div>
        </header>
    )
}
