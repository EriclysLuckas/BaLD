import styleTypeLashs from "../TypeLashs/TypeLashs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

// Import Swiper styles
import 'swiper/css/autoplay'; 


export default function TypeLashs() {
  return (
    <section className={styleTypeLashs.SectionTypeLashs}>
      <h1>Tipos de Designs</h1>

      <div className={styleTypeLashs.TypeLash}>
      <Swiper  
        loop={true} // Ativa o loop infinito
        modules={[  ]}
        slidesPerView={1}
        >

          <SwiperSlide >
            <p>Teste 1</p>
            <figure className = {styleTypeLashs.figureswiper}> <img src="../img/ciliosBanner.jpg" alt="teste" /></figure>
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