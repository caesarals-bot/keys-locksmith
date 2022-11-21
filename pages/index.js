import { LayoutsIndex } from "../components/layouts/LayoutsIndex";
import { Carrousel } from "../components/ui/carrusel/Carrousel";


export default function Home() {
  return (
    <LayoutsIndex
    page='inicio'
    title='Keys Cerrajeria'
    description="Blog de musica, Venta de guitarras y mas"
  >
    <div className="containerStyles">
      <Carrousel />
    </div>
  </LayoutsIndex>
  )
}
