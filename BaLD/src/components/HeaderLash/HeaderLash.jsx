import styleHeader from "../HeaderLash/HeaderLash.module.css";
import { IoMenu, IoCloseSharp  } from "react-icons/io5";
import { useState } from "react";


export default function HeaderLash() {
const [isOpen,setIsOpen] = useState(false)


const handleOpenMenu = () => {
  setIsOpen(prevState=> !prevState)
  console.log('teste')
}

  return (
      <section className={styleHeader.HeaderLash} id ="home">
        <div className={styleHeader.contentHeaderLash}>
          <div className={styleHeader.hambMenu}>  {isOpen ?  <IoCloseSharp onClick={handleOpenMenu}/>:  <IoMenu onClick={handleOpenMenu}/>}</div>
          <div className={styleHeader.logoLash}> <figure> <img src="../img/logo.png" alt="" /></figure> </div>
        </div>
          {(isOpen)&&(
            <div className = {styleHeader.menuMobile}>
              <div className = {styleHeader.contentMenu}>
              <ul>
                <li><a href ="#home">Home</a>  </li>
                <li><a href ="#tipos">Tipos de Desgins</a></li>
                <li><a href ="#descubra">Descubra seu Estilo</a></li>
                <li><a href ="#resultados">Resultados</a></li>
                <li><a href ="#cuidados">Dicas de Cuidados</a></li>
                <li><a href ="#contatos">Contatos</a></li>

              </ul>

              </div>
            </div>
          )}
      </section>





  )



}