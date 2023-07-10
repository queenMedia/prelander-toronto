import axios from "axios";
import FORMULA from "./assets/images/BitcoinEra.png";
import LEQUOTIDIEN from "./assets/images/logo.png"

export const LINK = "https://givemes.com/outgoing";
export const CHARACTER = "André Claro Amaral Ventura";
export const CHARACTER_TWO_NAMES = "André Ventura";
export const CHARACTER_FIRSTNAME = "Andre";
export const OFFER_NAME = "Bitcoin360AI";
export const MODAL = FORMULA;
export const SUBTITLE_FIRST_LINE = `Slovenski državljani že kopičijo milijone evrov od doma z uporabo te "vrzeli bogastva" - ampak je to zakonito?`;
export const SUBTITLE_SECOND_LINE = `est-ce légitime?`;
export const FIRST_PARAGRAPH = `${CHARACTER} é um comentarista esportivo, professor universitário e político português. ${CHARACTER_FIRSTNAME} ficou famoso por não se preocupar em ser honesto sobre como ganha dinheiro.`;
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
