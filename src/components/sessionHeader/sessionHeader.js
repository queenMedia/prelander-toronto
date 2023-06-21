import {LOGO } from "../../config"
import "./sessionHeader.css";
import "./sessionHeader.responsive.css";

export const SessionHeader = (props) => {
  return (
    <div className="session_header">
      <div className="session_header_aside_container">
        <a href="/" className="burguer_button">
          <span className="burguer_button_line"></span>
          <span className="burguer_button_line"></span>
          <span className="burguer_button_line"></span>
        </a>
        <img src={LOGO} className="logo_responsive" alt="Le Quotidien" />
      </div>
      <div className="session_header_aside_container_right">
        <ul className="header_media_container_list">
          <li className="session_header_list_item">
            <a href="/" className="session_header_links">
              Se connecter
            </a>
          </li>
        </ul>
        <a href="/" className="session_header_button">
          Abonnex-vous
        </a>
      </div>
    </div>
  );
};
