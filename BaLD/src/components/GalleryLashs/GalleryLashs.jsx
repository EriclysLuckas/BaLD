import styleGallery from "../GalleryLashs/GalleryLashs.module.css";
import GalleryLashsJson from "../GalleryLashs/GalleryLashs.json";
import { useState } from 'react'; // Certifique-se de importar useState

export default function GalleryLashs() {


  const [typeSelected,setTypeSelected ] = useState("Volume Brasileiro")
  const handleTypeClick = (type) =>{
    setTypeSelected(type)
  }

  const imgFilter = typeSelected ? GalleryLashsJson.filter((item) => item.name === typeSelected) : []

  return(
    <section className ={styleGallery.sectionGallery}>

      <div className ={styleGallery.screenGallery}>
        <div className = {styleGallery.typesGallery}>
        {GalleryLashsJson.map ((item)=>(
          
          <span
          key = {item.name}
          onClick = {()=> handleTypeClick(item.name)}
          className={item.name === typeSelected ? styleGallery.selectedType : ''}
          >{item.name} 
          <img src={item.min} alt="" />

           
          </span>
        ))}
        

        </div>

        <div className = {styleGallery.contentGallery}>
          {imgFilter.length > 0 && (
            imgFilter.map((galleryItem) => (
              <img
              className = {styleGallery.imgGallery}
              key={galleryItem.id}
              src={galleryItem.img}
              alt={galleryItem.name} 
            />              ))

          )}
        </div>

      </div>


    </section>
  )
  
}