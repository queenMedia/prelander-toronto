
import "./headerMedia.css";
import "./headerMedia.responsive.css";

import Wifi from "../../assets/icons/wifi-icon.png";
import Facebook from "../../assets/icons/facebook-header.png";
import Twitter from "../../assets/icons/twitter-icon.png";
import Instagram from "../../assets/icons/instagram-icon.png";
import Search from "../../assets/icons/search-icon.png";
import { TelegramRedirect } from "../telegramRedirect/telegramRedirect";

export const HeaderMedia = () => {
  const list_social_media = [
    {
      src: Wifi,
      alt: "Wifi"
    },
    {
      src: Facebook,
      alt: "Facebook"
    },
    {
      src: Twitter,
      alt: "Twitter"
    },
    {
      src: Instagram,
      alt: "Instagram"
    }
  ]
  return (
    <div className="header_media_container">
      <ul className="header_media_container_list">
        <li className="header_media_container_list_item">
          <TelegramRedirect className="header_media_container_links">
            Epaper2
          </TelegramRedirect>
        </li>
        <li className="header_media_container_list_item">
          <TelegramRedirect className="header_media_container_links">
            Jeux-Concours
          </TelegramRedirect>
        </li>
        <li className="header_media_container_list_item">
          <TelegramRedirect className="header_media_container_links">
            Avis de décès
          </TelegramRedirect>
        </li>
        <li className="header_media_container_list_item">
          <TelegramRedirect href="/" className="header_media_container_links">
            Données personnelles
          </TelegramRedirect>
        </li>
      </ul>
      <ul className="header_media_container_social_media">
        {
          list_social_media.map(({src, alt} , index) => (
            <li key={index} className="header_media_container_social_media_item">
              <TelegramRedirect href="/" className="header_media_container_social_media_link">
                <img src={src} alt={alt} className="header_media_container_social_media_icon" />
              </TelegramRedirect>
            </li>
          ))
        }
      </ul>
      <TelegramRedirect href="/" className="header_nav_search">
        Rechercher
        <img src={Search} alt="Search" className="header_nav_search_icon" />
      </TelegramRedirect>
    </div>
  );
};
