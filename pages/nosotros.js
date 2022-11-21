import Image from "next/future/image";
import { LayoutsIndex } from "../components/layouts/LayoutsIndex";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <LayoutsIndex
        page='Nosotros'
        description="Sobre nosotros, guitarLA, tienda de musica"
    >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image 
              src="/carrusel/cerra1.png"
              alt="Imagen sobre nosotros"
              width={1000}
              height={800}
            />
            <div>
              <p>
              Somos una empresa especializada en instalaciones, apertura y reparaciones de cerraduras.
              Con más de 10 años de experiencia, queriendo entregarles a nuestros clientes seguridad y cumplimiento. Trabajamos con los más altos estándares de calidad.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui omnis consequuntur minus maiores. Aspernatur tenetur voluptates ex voluptate dicta numquam neque. Obcaecati adipisci inventore asperiores reprehenderit odit ab assumenda.
              </p>
            </div>
          </div>

        </main>
    </LayoutsIndex>
  )
}
