import styleTypeLashs from "../TypeLashs/TypeLashs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
export default function TypeLashs() {
  return (
    <section className={styleTypeLashs.SectionTypeLashs}>
      <h1>Tipos de Designs</h1>

      <div className={styleTypeLashs.TypeLash}>
        <Swiper>
          <SwiperSlide >
            <p>Teste 1</p>
            <figure> <img src="../img/ciliosBanner.jpg" alt="teste" /></figure>
          </SwiperSlide>
          <SwiperSlide >
            <p>Teste 2</p>
            <figure> <img src="../img/ciliosBanner.jpg" alt="teste" /></figure>
          </SwiperSlide>
        </Swiper>

      </div>


    </section>



  )

}