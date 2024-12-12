import styleBtnToSchedule from "../BtnToSchedule/BtnToSchedule.module.css"
import { useState } from "react";

export default function BtnToSchedule() {

const [formAgendamento, setFormAgendamento] = useState(false)


const toggleBtnFormAgendamento = () => {
  setFormAgendamento((prevState )=> !prevState)

 
}




  return(
    <>
    <button className = {styleBtnToSchedule.BtnToSchedule} onClick ={toggleBtnFormAgendamento}>Agendar</button>
   
    {formAgendamento && (
      <div className ={styleBtnToSchedule.ModalAgendamento}>
          
        


      </div>



    )} 
    </>
    
  )
}