import HeaderLash from "../src/components/HeaderLash/HeaderLash";
import BannersHeader from "../src/components/BannersHeader/BannersHeader.jsx";
import styleApp from "./app.module.css"
import InfoRange from "../src/components/InfoRange/InfoRange"
import TypeLashs from "../src/components/TypeLashs/TypeLashs"
import GalleryLashs from './components/GalleryLashs/GalleryLashs';
function App() {

  return (
    <div  className = {styleApp.divApp}>
    <HeaderLash />
    <InfoRange />
    <BannersHeader />
    <TypeLashs />
    <GalleryLashs />
    </div>
  )

  
}

export default App
