import styleBtnToSchedule from "../BtnToSchedule/BtnToSchedule.module.css"
import { useState, useEffect } from "react";
import { IoCloseSharp  } from "react-icons/io5";

import FormSite from "../FormSite/FormSite";
export default function BtnToSchedule() {

const [formAgendamento, setFormAgendamento] = useState(false)


const toggleBtnFormAgendamento = () => {
  setFormAgendamento((prevState )=> !prevState)
}
const toggleBtnFormAgendamentoClose = () => {
  setFormAgendamento(false)
}


useEffect(() => {
  if (formAgendamento) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
return () =>{
  document.body.style.overflow = 'auto'
};
}, [formAgendamento]);


  return(
    <>
    <button className = {styleBtnToSchedule.BtnToSchedule} onClick ={toggleBtnFormAgendamento}>Agendar</button>
   
    {formAgendamento && (
      <div className ={styleBtnToSchedule.ModalAgendamento}>

        <div className = {styleBtnToSchedule.contentModalAgendamento}>
        <IoCloseSharp onClick ={toggleBtnFormAgendamentoClose}  className ={styleBtnToSchedule.closeModalAgendamento}/>

          <FormSite />

        </div>


      </div>



    )} 
    </>
    
  )
}