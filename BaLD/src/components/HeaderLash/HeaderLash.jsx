import styleHeader from "../HeaderLash/HeaderLash.module.css";
import { IoMenu } from "react-icons/io5";

export default function HeaderLash() {


  return (
      <section className={styleHeader.HeaderLash} >
        <div className={styleHeader.contentHeaderLash}>
          <div className={styleHeader.hambMenu}>  <IoMenu /></div>
          <div className={styleHeader.logoLash}> <figure> <img src="../img/logo.png" alt="" /></figure> </div>
        </div>
        
        
      </section>





  )



}