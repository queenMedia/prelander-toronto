import "./footer.css";
import "./footer.responsive.css";
import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

export const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
          <ul className="footer-menu">
            <li>
              <TelegramRedirect>SUIVEZ LE MONDE</TelegramRedirect>
            </li>
            <li>
              <TelegramRedirect>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                Facebook
              </TelegramRedirect>
            </li>
            <li>
              <TelegramRedirect>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                Youtube
              </TelegramRedirect>
            </li>
            <li>
              <TelegramRedirect>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                Twitter
              </TelegramRedirect>
            </li>
            <li>
              <TelegramRedirect>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                Instagram
              </TelegramRedirect>
            </li>
            <li>
              <TelegramRedirect>
                <i className="fa fa-snapchat-ghost" aria-hidden="true"></i>
                Snapchat
              </TelegramRedirect>
            </li>
            <li>
              <TelegramRedirect>
                <i className="fa fa-rss-square" aria-hidden="true"></i>
                RSS
              </TelegramRedirect>
            </li>
          </ul>
          <p className="footer-copyright">© 2023 Copyright. Tous droits réservés.</p>
        </div>
    </footer>
  );
};
