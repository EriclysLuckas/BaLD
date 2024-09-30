import styleCompareBackAfter from "../CompareBackAfter/CompareBackAfter.module.css"

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function CompareBackAfter() {



  return (
    <section className={styleCompareBackAfter.CompareBackAfterSection}>

      <div className = {styleCompareBackAfter.contentCompare}>
      <ReactCompareSlider className={styleCompareBackAfter.compare}
        itemOne={<ReactCompareSliderImage src="" srcSet="../../../img/volumeEgipcios.jpg" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="" srcSet="../../../img/Typelash.png" alt="Image two" />}
      />
      </div>
      <div className = {styleCompareBackAfter.contentCompare}>
      <ReactCompareSlider className={styleCompareBackAfter.compare}
        itemOne={<ReactCompareSliderImage src="" srcSet="../../../img/volumeEgipcios.jpg" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="" srcSet="../../../img/Typelash.png" alt="Image two" />}
      />
      </div>
      <div className = {styleCompareBackAfter.contentCompare}>
      spa



      <ReactCompareSlider className={styleCompareBackAfter.compare}
        itemOne={<ReactCompareSliderImage src="" srcSet="../../../img/volumeEgipcios.jpg" alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src="" srcSet="../../../img/Typelash.png" alt="Image two" />}
      />
      </div>
     
   

    </section>
  )
}