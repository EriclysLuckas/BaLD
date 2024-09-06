import HeaderLash from "../src/components/HeaderLash/HeaderLash";
import BannersHeader from "../src/components/BannersHeader/BannersHeader.jsx";
import styleApp from "./app.module.css"
import InfoRange from "../src/components/InfoRange/InfoRange"

function App() {

  return (
    <div  className = {styleApp.divApp}>
    <HeaderLash />
    <InfoRange />
    <BannersHeader />
    </div>
  )

  
}

export default App
