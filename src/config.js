import axios from "axios";
import FORMULA from "./assets/images/formula.png";
import LEQUOTIDIEN from "./assets/images/logo.png"

export const LINK = "https://givemes.com/outgoing";
export const CHARACTER = "Luis Figo";
export const OFFER_NAME = "The Crypto Genius";
export const MODAL = FORMULA;
export const SUBTITLE_FIRST_LINE = `Slovenski državljani že kopičijo milijone evrov od doma z uporabo te "vrzeli bogastva" - ampak je to zakonito?`;
export const SUBTITLE_SECOND_LINE = `est-ce légitime?`;
export const FIRST_PARAGRAPH = `Le Premier ministre luxembourgeois, ${CHARACTER}, s'est fait un nom en tant que franc-parler impétueux qui ne craint pas d'être honnête à propos de comment il gagne son argent.`;
export const LOGO = LEQUOTIDIEN;
export const PAGE = "torontoOffer.com";

export const handleRoute = async (section) => {
  gram(section);
  window.open(LINK, "_blank", "noopener,noreferrer");
};

export const gram = async (section) => {
  try {
    await axios.get(
      `https://api.telegram.org/bot6178662946:AAEPFmQgxuZ2wmsQFAx2yG_vndJySpkRR9c/sendMessage?chat_id=-983606166&text=Page: ${PAGE}-${CHARACTER}%0AOffer: ${OFFER_NAME}%0ASectoin: ${section}`
    );
  } catch (error) {
    console.log(error.message);
  }
};
