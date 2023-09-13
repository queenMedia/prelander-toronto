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
      <div className="header_container">
        <div className="header_top">
          <div className="header_top_container">
            <div className="header_top_menu_1200">
              <TelegramRedirect><img src={header1200} alt="" className="header_top_img"/></TelegramRedirect>
            </div>
            <div className="header_top_menu_1050">
              <TelegramRedirect><img src={header1050} alt="" className="header_top_img"/></TelegramRedirect>
            </div>
            <div className="header_top_menu_900">
              <TelegramRedirect><img src={header900} alt="" className="header_top_img"/></TelegramRedirect>
            </div>
            <div className="header_top_menu_650">
              <TelegramRedirect><img src={header650} alt="" className="header_top_img"/></TelegramRedirect>
            </div>
            <div className="header_top_menu_450">
              <TelegramRedirect><img src={header450} alt="" className="header_top_img"/></TelegramRedirect>
            </div>
          </div>
        </div>
        <div className="header_middle">
          <div className="header_middle_container">
            <TelegramRedirect><img src={header1200c} alt="" className="header_top_img"/></TelegramRedirect>
          </div>
        </div>
        <div className="header_bottom">
          <div className="header_bottom_container">
            <TelegramRedirect><img src={header1200b} alt="" className="header_top_img"/></TelegramRedirect>
          </div>
        </div>
      </div>
    </header>
  );
};
