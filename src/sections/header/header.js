import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

import "./header.css";
import "./header.responsive.css";

import header1200 from "../../assets/images/header/header_1200-t.jpg"
import header1050 from "../../assets/images/header/header_1050.jpg"
import header900 from "../../assets/images/header/header_900.jpg"
import header650 from "../../assets/images/header/header_650.jpg"
import header450 from "../../assets/images/header/header_450.jpg"

import header1200c from "../../assets/images/header/header_1200-c.jpg"
import header1200b from "../../assets/images/header/header_1200-b.jpg"

export const Header = () => {
  return (
    <header className="header_section">
      <div className="header_header_container">
        <div className="header_header_top">
          <ul className="header_header_list">
            <li className="header_header_list_item">image</li>
            <li className="header_header_list_item">DN</li>
            <li className="header_header_list_item">TSF</li>
            <li className="header_header_list_item">Dinheiro Vivo</li>
            <li className="header_header_list_item">V Digital</li>
            <li className="header_header_list_item">Plataforma</li>
            <li className="header_header_list_item">O Jogo</li>
            <li className="header_header_list_item">Motor 24</li>
            <li className="header_header_list_item">Men's Health</li>
            <li className="header_header_list_item">Women's Health</li>
            <li className="header_header_list_item">Avasões</li>
            <li className="header_header_list_item">Volta ao Mundo</li>
          </ul>
          <div className="header_header_top_button_group">
            <button type="button" className="header_header_top_button_group_button">
              TSF EM DIRETO
            </button>
            <button type="button" className="header_header_top_button_group_button">
              CLASSIFICADOS
            </button>
            <button type="button" className="header_header_top_button_group_button">
              ASSINAR O PREMIUM
            </button>
          </div>
        </div>
      </div>
      <TelegramRedirect>
        <div className="header_container">
          <div className="header_container_main">
            <div className="header_container_main_top">
              
            </div>
          </div>
        </div>
      </TelegramRedirect>
      
    </header>
  );
};
