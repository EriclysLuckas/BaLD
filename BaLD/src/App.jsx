import HeaderLash from "../src/components/HeaderLash/HeaderLash";
import BannersHeader from "../src/components/BannersHeader/BannersHeader.jsx";
import styleApp from "./app.module.css"
import InfoRange from "../src/components/InfoRange/InfoRange"
import TypeLashs from "../src/components/TypeLashs/TypeLashs"
import GalleryLashs from './components/GalleryLashs/GalleryLashs';
import CompareBackAfter from './components/CompareBackAfter/CompareBackAfter';
function App() {

  return (
    <div  className = {styleApp.divApp}>
    <HeaderLash />
    <InfoRange />
    <BannersHeader />
    <TypeLashs />
    <CompareBackAfter />
    <GalleryLashs />


    </div>
  )

  
}

export default App
