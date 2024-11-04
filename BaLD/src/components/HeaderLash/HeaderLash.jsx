import styleHeader from "../HeaderLash/HeaderLash.module.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function HeaderLash() {
const [isOpen,setIsOpen] = useState(false)


const handleOpenMenu () => {
  setIsOpen = (true)
}

  return (
      <section className={styleHeader.HeaderLash} >
        <div className={styleHeader.contentHeaderLash}>
          <div className={styleHeader.hambMenu}>  <IoMenu /></div>
          <div className={styleHeader.logoLash}> <figure> <img src="../img/logo.png" alt="" /></figure> </div>
        </div>
        
        
      </section>





  )



}