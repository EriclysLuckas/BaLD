import styleHeader from "../HeaderLash/HeaderLash.module.css";
import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

export default function HeaderLash() {


  return (
    <>
      <section className={styleHeader.HeaderLash} >
        <div className={styleHeader.contentHeaderLash}>
          <div className={styleHeader.hambMenu}>  <IoMenu /></div>
          <div className={styleHeader.logoLash}> <figure> <img src="../img/logo.png" alt="" /></figure> </div>
        </div>
        
        <aside className={styleHeader.asideHeader}>
          <div className={styleHeader.contentAsideHeader}>
            <span className={styleHeader.spanAsideHeaderContact}><strong>Contato:</strong> (83) 99999-9999 </span>
            <div className={styleHeader.buttonAsideHeader}>
              <span className={styleHeader.spanAsideHeader}>Se encante! </span>
              
              <span className={styleHeader.iconAsideHeader}>
                    <figure className={styleHeader.figureIconAside}>
                      <FaInstagram/>
                    </figure>
              </span>
            </div>

          </div>
        </aside>
      </section>






    </>



  )



}