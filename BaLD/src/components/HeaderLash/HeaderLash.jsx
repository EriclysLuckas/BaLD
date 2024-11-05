import styleHeader from "../HeaderLash/HeaderLash.module.css";
import { IoMenu, IoCloseSharp  } from "react-icons/io5";
import { useState } from "react";


export default function HeaderLash() {
const [isOpen,setIsOpen] = useState()


const handleOpenMenu = () => {
  setIsOpen(prevState=> !prevState)
  console.log('teste')
}
const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'tipos', label: 'Tipos de Designs' },
  { id: 'descubra', label: 'Descubra seu Estilo' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'cuidados', label: 'Dicas de Cuidados' },
  { id: 'contatos', label: 'Contatos' },
];

  return (
      <section className={styleHeader.HeaderLash} id ="home">
        <div className={styleHeader.contentHeaderLash}>
          <div className={styleHeader.hambMenu}>  {isOpen ?  <IoCloseSharp onClick={handleOpenMenu}/>:  <IoMenu onClick={handleOpenMenu}/>}</div>
          <div className={styleHeader.logoLash}> <figure> <img src="../img/logo.png" alt="" /></figure> </div>
        </div>
          {(isOpen)&&(
            <div className={isOpen ? styleHeader.menuMobile : styleHeader.menuMobileClose}>
            <div className = {styleHeader.contentMenu}>
              <ul>
            

                {menuItems.map((item) =>(
                  <li key ={item.id}>
                    <a href ={`#${item.id}`} onClick={handleOpenMenu}>{item.label}</a>
                  </li>
                ))}

              </ul>

              </div>
            </div>
          )}
      </section>





  )



}