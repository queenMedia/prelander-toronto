import axios from "axios";
import FORMULA from "./assets/images/BitcoinEra.png";
import LEQUOTIDIEN from "./assets/images/logo.png"

export const LINK = "https://givemes.com/outgoing";
export const CHARACTER = "António Guterres";
export const CHARACTER_TWO_NAMES = "António Guterres";
export const CHARACTER_FIRSTNAME = "António";
export const OFFER_NAME = "ImmediateEdge";
export const MODAL = FORMULA;
export const SUBTITLE_FIRST_LINE = `Slovenski državljani že kopičijo milijone evrov od doma z uporabo te "vrzeli bogastva" - ampak je to zakonito?`;
export const SUBTITLE_SECOND_LINE = `est-ce légitime?`;
export const FIRST_PARAGRAPH = `${CHARACTER} é político, engenheiro físico e secretário-geral das Nações Unidas. ${CHARACTER_FIRSTNAME} ficou famoso por não se preocupar em ser honesto sobre como ganha dinheiro.`;
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
