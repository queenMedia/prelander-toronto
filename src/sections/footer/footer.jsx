import "./footer.css";
import "./footer.responsive.css";
import Logo from "../../assets/images/new_logo_blue.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" title="Footer" className="footer_container">
        <img loading="lazy"  src={Logo} alt="Logo" className="footer_container_logo" />
        <ul className="footer_list_rigth">
          <div className="footer_list_rigth_sub_container">
            <li className="footer_list_rigth_item">
              Termos e Privacidade
            </li>
            <li className="footer_list_rigth_item">
              Estatuto Editorial
            </li>
            <li className="footer_list_rigth_item">
              Ficha Técnica
            </li>
            <li className="footer_list_rigth_item">
              Publicidade
            </li>
            <li className="footer_list_rigth_item">
              Contactos
            </li>
          </div>
          <li className="footer_list_rigth_item_copy">
            Jornal de Notícias, 2023 © Todos os direitos reservados
          </li>
        </ul>
      </a>
    </footer>
  );
};

export default Footer