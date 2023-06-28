import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

import "./header.css";
import "./header.responsive.css";

import Logo from "../../assets/images/new_logo.jpeg";
import Search from "../../assets/icons/newHeader/search.png";
import User from "../../assets/icons/newHeader/user.png";
import Moon from "../../assets/icons/newHeader/moon.png";
import Mobile from "../../assets/icons/newHeader/mobile_menu.png";

export const Header = () => {
  return (
    <header className="header_section">
      <div className="header_container">
        <ul className="header_list_left">
          <li className="header_list_left_item_image">
            <img src={Logo} className="header_container_logo" />
          </li>
          <li className="header_list_left_item">
            <a>ÚLTIMAS</a>
          </li>
          <li className="header_list_left_item">
            <a>MAIS VISTAS</a>
            
          </li>
          <li className="header_list_left_item">
            <a>JN DIRETO</a>
          </li>
        </ul>
        <ul className="header_list_rigth">
          <li className="header_list_rigth_item_hash_tag_container">
            <a className="header_list_rigth_item_hash_tag">#guerra</a>
          </li>
          <li className="header_list_rigth_item_hash_tag_container">
            <a className="header_list_rigth_item_hash_tag">#ataque ao mercado</a>
          </li>
          <li className="header_list_rigth_item_hash_tag_container">
            <a className="header_list_rigth_item_hash_tag">#wagner</a>
            
          </li>
          <li className="header_list_rigth_item_head_phones_container">
            <a className="header_list_rigth_item_head_phones">OUVIR TSF</a>    
          </li>
          <li className="header_list_rigth_item_news_paper_container">
            <a className="header_list_rigth_item_news_paper">LER JN</a>    
          </li>
          <li className="header_list_rigth_item_icon_container">
            <img className="header_list_rigth_item_icons" src={Search} />    
          </li>
          <li className="header_list_rigth_item_icon_container">
            <img className="header_list_rigth_item_icons" src={User} />    
          </li>
          <li className="header_list_rigth_item_icon_container">
            <img className="header_list_rigth_item_icons" src={Moon} />    
          </li>
          <li className="header_list_rigth_item_mobile_menu">
            <img className="header_list_rigth_item_icons" src={Mobile} />
          </li>
        </ul>
      </div>
    </header>
  );
};
