import styleBannersHeader from "../BannersHeader/BannersHeader.module.css";



export default function BannersHeader() {
  return( 

    <section className = {styleBannersHeader.SectionBannerHeader}>

      <div className = {styleBannersHeader.titleBanner}>
        <h1>Lash Design</h1>
        <p></p>
        <p>Lash desgin em João pessoa <br/>
        Qualidade teste, estea asjkfas asfasdas asdasdas.</p>
        <button>Agendar</button>
      </div>

      <div className = {styleBannersHeader.BannerScreen}>
      <figure> <img src="../img/ciliosBanner.jpg" alt="" /></figure>
      </div>
    
    </section>
  )
}