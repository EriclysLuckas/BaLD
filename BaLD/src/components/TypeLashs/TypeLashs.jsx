import styleTypeLashs from "../TypeLashs/TypeLashs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import { Autoplay } from "swiper";
import TypesLashsJson from "../TypeLashs/TypeLashs.json";


export default function TypeLashs() {

  
  return (
    <section className={styleTypeLashs.SectionTypeLashs}>
      <h1>Tipos de Designs</h1>

      <div className={styleTypeLashs.TypeLash}>


    
      <Swiper  className = {styleTypeLashs.swiper}

        loop={true} 
        // modules={[ Autoplay ]}
        // autoplay={{
        //   delay: 2500, 
        //   disableOnInteraction: false, 
        // }}
        slidesPerView={1}
        spaceBetween={50}

        >

          {TypesLashsJson.map((item) =>(
            <SwiperSlide key={item.id}>
              <p className = {styleTypeLashs.titleSlide}>{item.name} <img src={item.min} alt="" /></p>
              <figure className = {styleTypeLashs.figureSlider}>           
              <img src={item.img} alt ="slide" />
              <img src={item.img} alt ="slide" className = {styleTypeLashs.imgBackground} />

              </figure>
            </SwiperSlide>
          ))}
        </Swiper> 
        
        

      </div>

      

    </section>



  )

}