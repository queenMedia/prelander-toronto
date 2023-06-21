import Logo from "../../assets/images/logo.svg"
import Cloud from "../../assets/icons/cloud-icon.svg"
import "./navHeader.css";
import "./navHeader.responsive.css";
import { TelegramRedirect } from "../telegramRedirect/telegramRedirect";

export const NavHeader = (props) => {
    const linksNav = [
        <li className="nav_header_list_item">
            <TelegramRedirect className="nav_header_links">
                NASLOVINCA
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item ">
            <TelegramRedirect className="nav_header_links nav_header_links_selected">
                NOVICE
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item">
            <TelegramRedirect className="nav_header_links">
                ŠPORT
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item">
            <TelegramRedirect className="nav_header_links">
                POP IN
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item">
            <TelegramRedirect className="nav_header_links">
                VREME
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item">
            <TelegramRedirect className="nav_header_links">
                CESTE
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item hide_fifth">
            <TelegramRedirect className="nav_header_links">
                SVEŽE
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item hide_fourth">
            <TelegramRedirect className="nav_header_links">
                TV ODDAJE
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item hide_third">
            <TelegramRedirect className="nav_header_links">
                TV SPORED
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item hide_second">
            <TelegramRedirect className="nav_header_links">
                VOYO
            </TelegramRedirect>
        </li>,
        <li className="nav_header_list_item hide_first">
            <TelegramRedirect className="nav_header_links">
                MAGAZIN
            </TelegramRedirect>
        </li>
    ]
  return (
    <nav className="nav_header">
        <ul className="nav_header_list_content">
            <li className="nav_header_list_item_bordered">
                <TelegramRedirect className="nav_header_links">
                    <img src={Logo} alt="Logo" className="logo_responsive" />
                </TelegramRedirect>
            </li>
            <div className="nav_header_list">
                {linksNav.map((link, index) =>(link))}
            </div>
            <div className="nav_header_list_right">
                <li className="nav_header_list_item_group">
                    <TelegramRedirect className="nav_header_links_group">
                        <img src={Cloud} alt="Logo" className="cloud_icon " /> 
                        -1°C
                    </TelegramRedirect>
                </li>
                <li className="nav_header_list_item_bordered">
                    <TelegramRedirect className="nav_header_links_icons">
                        <i class="fas fa-user"></i>
                    </TelegramRedirect>
                </li>
                <li className="nav_header_list_item_bordered">
                    <TelegramRedirect className="nav_header_links_icons">
                        <i class="fas fa-search"></i>
                    </TelegramRedirect>
                </li>
            </div>
        </ul>
    </nav>
  );
};



// -1°C

// Slovenija
// Črna kronika
// Tujina
// Gospodarstvo
// Znanost in tehnologija
// Preverjeno
// Fokus
// Inšpektor
// Svet
