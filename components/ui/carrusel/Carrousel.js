
import Image from "next/image"
import {  useEffect, useState } from "react"

import  styles  from "../../../styles/carrusel.module.css";
import { useAdd } from "../../hooks/useAdd"

const imageSlide = [
  {
      url:"/carrusel/cerra1.png",
      title:"instalando"
  },
  {
      url:"/carrusel/cerra2.png",
      title:"noche segura"
  },
  {
      url:"/carrusel/cerra3.png",
      title:"instalando 2"
  }
]

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0
  )

  const initial = currentIndex
  const maxCounter = imageSlide.length -1
  const {
    counter, 
    increment
} = useAdd(initial, maxCounter)
  useEffect(() => {
    setCurrentIndex(counter)
  }, [counter])
  
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex(counter ++), 2000
    )
    return () => clearInterval(interval)
  })
  

  return (
    <div className={styles.containerSlider}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imageSlide[currentIndex].url})`,
        transition:"1s"
      }}></div>
      <div className={styles.containerButtonImg}>
        <button
          style={{
            width:"35px",
            height:"35px",
            borderRadius:"80px",
            border:"none",
            cursor:"pointer"
          }}
          onClick={() => increment(-1)}
        >
          <Image
            src="/carrusel/previus.svg"
            alt="next"
            width={30}
            height={30}
          />
        </button>
        <button
          style={{
            width:"35px",
            height:"35px",
            borderRadius:"80px",
            border:"none",
            cursor:"pointer"
          }}
          onClick={() => increment(+1)}
        >
          <Image
            src="/carrusel/next.svg"
            alt="next"
            width={50}
            height={50}
          />
        </button>
      </div>

    </div>
  )
}
