import styleFooter from "../FooterComponent/FooterComponent.module.css";
import IconFooter from '../IconsFooter/IconsFooter';

export default function FooterComponent() {
  return (
    <section className={styleFooter.sectionFooter}>
      <div className={styleFooter.logoFooter}>
        <img src="../img/logo.png" alt="" />
      </div>
      <div className={styleFooter.contentFooter}>
        <div className={styleFooter.linksIcons}>
          <IconFooter />

          <div className={styleFooter.icons}>
            <span>Contato:(83) 9 9999-9999</span>
            <span>E-mail: teste@teste.com.br</span>
            <span>teste</span>
          </div>

        </div>

        <form action="POST">
          <input type="text" />
        </form>
        <div className={styleFooter.imgProfissional}> <img src="../img/profissional.png" alt="" />
        </div>
      </div >

    </section >

  )
}