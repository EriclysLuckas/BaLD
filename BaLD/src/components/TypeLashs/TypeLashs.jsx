import styleTypeLashs from "../TypeLashs/TypeLashs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

// Import Swiper styles


export default function TypeLashs() {
  return (
    <section className={styleTypeLashs.SectionTypeLashs}>
      <h1>Tipos de Designs</h1>

      <div className={styleTypeLashs.TypeLash}>
      <Swiper  className = {styleTypeLashs.swiper}
      
        loop={true} // Ativa o loop infinito
        modules={[  ]}
        slidesPerView={1}
        >

          <SwiperSlide className = {styleTypeLashs.slideContent}>
            <p className = {styleTypeLashs.titleSlide}>Teste 1</p>
            <figure className = {styleTypeLashs.figureSlider}> <img src="../img/ciliosBanner.jpg" alt="teste" /></figure>
          </SwiperSlide>
          <SwiperSlide >
            <p>Teste 2</p>
            <figure className = {styleTypeLashs.figureswiper}> <img src="../img/Typelash.png" alt="teste" /></figure>
          </SwiperSlide>
        </Swiper>

      </div>


    </section>



  )

}