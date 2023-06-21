import Banner from "../../assets/images/banner-first-content.png";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import ImgTransactions from "../../assets/images/img2SideFormule.png";
import BC from "../../assets/images/formule_francaise_bill.jpg";
import { OFFER_NAME, CHARACTER } from "../../config";
import { useState } from "react";
import { TelegramRedirect } from "../telegramRedirect/telegramRedirect";

import "./firstContent.css";
import "./firstContent.responsive.css";

export const FirstContent = (props) => {
  const [displayReadMore, setDisplayReadMore] = useState(true);
  return (
    <article className="first_content">
      <h1 className="first_content_title">
        <TelegramRedirect className="first_content_title_link">
          <u>POSEBNO POROČILO</u>: Najnovejša Investicija {CHARACTER} Je Prestrašila Vlado In Velike Banke
        </TelegramRedirect>
      </h1>
      <p>
        <em className="first_content_em">
          Slovenski državljani že kopičijo milijone evrov od doma z uporabo te "vrzeli bogastva" - ampak je to zakonito?
        </em>
      </p>
      <img src={Banner} alt="banner" className="image_responsive" />
      <img src={Img1} alt="Img1" className="image_responsive" />
      <p className="text_image_below">
        {CHARACTER} razkriva novo skrivno investicijo, ki spreminja stotine ljudi v Sloveniji v velike bogataše
      </p>
      <p className="text_general_content">
        Slovinský politik {CHARACTER} se vzhičeno spoprime z največjimi izzivi, kar je odlično prikazal njegov najnovejši projekt.
      </p>
      <p className="text_general_content">
        Prejšnji teden je nastopil na Dobro jutro in oznanil novo "vrzel bogastva", 
        ki po njegovem mnenju lahko <b>spremeni kogarkoli v milijonarja v 3-4 minutah.</b>
        61-letnik spodbuja vse v Sloveniji, da se poslužujejo te neverjetne možnosti 
        preden jo velike banke trajno zaprejo.
      </p>
      <p className="text_general_content">
        In dejansko to se je zgodilo, par minut po koncu intervjuja je Banka Slovenije 
        poklicala z namenom ustavitve oddajanja Janšovega intervjuja - bilo je že prepozno.
      </p>
      <p className="text_general_content">
        <b>Zgodilo se je točno sledeče:</b>
      </p>
      <p className="text_general_content">
        Voditelj Dobro jutro, David Urankan je povabil Janšo na oddajo, da bi ta 
        delil svoje nasvete o gradnji bogastva in slaven politik je spustil bombo:
      </p>
      <p className="text_general_content">
        "Kar me je naredilo bogatega je hitro posluževanje novih priložnosti - 
        brez kakršnegakoli omahovanja. In sedaj je moj glavni vir denarja novi
        <TelegramRedirect className="general_links general_links_bold">
          {" "}
          program samodejnega trženja kriptovalut imenovan Bitcoin Boozter.{" "}
        </TelegramRedirect>
        To je največja možnost, ki sem jo videl v celoten življenju, za hitro 
        gradnjo majhnega bogastva. Spodbujam vse, da si ga ogledate preden ga banke zaprejo."
      </p>
      <p className="text_general_content">
        David Urankar je bil onemogel, saj je Janša privlekel na plan svoj telefon in gledalcem 
        pokazal koliko denarja služi skozi ta nov program ustvarjanja denarja, ki povzroča šepetanje 
        vseh v Sloveniji.
      </p>
      <div className="image_group">
        <img src={Img2} alt="Img2" className="image_responsive_70" />
        <img
          src={ImgTransactions}
          alt="ImgTransactions"
          className="image_responsive_30"
        />
      </div>
      <p className="text_general_content">
        Odseku je zmanjkalo časa preden bi lahko Janša razložil več, zato smo mi izvedli ekskluziven 
        intervju z njim samim, da bi izvedeli več o tej kontroverzni priložnosti.
      </p>
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          EKSKLUZIVNO Z {CHARACTER.toUpperCase()}
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        <em>
          "Morda ste že slišali o tej {" "}
          <b> novi platformi investicij kriptovalut imenovani, ki </b>
          <TelegramRedirect className="general_links general_links_bold">
            {" "}
            Bitcoin Boozter{" "}
          </TelegramRedirect>{" "}
          pomaga običajnim ljudem v Sloveniji, Aziji ter Severni Ameriki, 
          da gradijo bogastva čez noč. Morda ste v dvomih, ker zveni predobro, 
          da bi bilo res."
        </em>
      </p>
      <p className="text_general_content">{CHARACTER} je nadaljeval:</p>
      <p className="text_general_content">
        <em>
          To razumem, saj sem sam mislil isto, ko mi je zanesljiv prijatelj
          o njem povedal. Ampak ko sem se prepričal na lastne oči koliko 
          denarja je služil, sem moral sam poskusiti.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Srečen sem, da sem to poskusil, saj je to bilo nekaj izmed največ in 
          najlažjega denarja, kar sem ga kadarkoli zaslužil. Govorim o{" "}
          <b>desetinah tisočih evrov dnevno na avtopilotu.</b>{" "}
          To je dobesedno najhitrejši način za služenje kupa denarja takoj zdaj. 
          In ne bo več dolgo obstajal, potem ko več in več ljudi o njem izve. Ali 
          ko ga banke trajno zaprejo."
        </em>
      </p>
      <img src={Img3} alt="Img3" className="image_responsive" />
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          KAJ TOČNO JE {OFFER_NAME.toUpperCase()} IN KAKO DELUJE?
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        <b>
          Ideja za{" "}
          <TelegramRedirect className="general_links general_links_bold">
            {OFFER_NAME}
          </TelegramRedirect>{" "}
          je neposredna:
        </b>{" "}
        Da omogoči povprečni osebi prihodek od eksplozije kriptovalut, 
        ki je še vedno ena izmed najbolj donosnih investicij 21. stoletja, 
        kljub mnenju večine ljudi.
      </p>
      <p className="text_general_content">
        Kljub temu, da je cena Bitcoina padla od svoje najvišje pri 20,000 $ 
        za Bitcoin, trgovci še vedno mastno služijo. Zakaj? Ker obstaja tisoče 
        drugih kriptovalut poleg Bitcoina, ki se dnevno trgujejo za ogromne prihodke.
      </p>
      <p className="text_general_content">
        Nekatere izmed teh kriptovalut so Ripple Ethereum, Monero, Zcash in še vedno 
        prinašajo povratke preko 10,000 % in več za običajne ljudi v Sloveniji.
      </p>
      <p className="text_general_content">
        <TelegramRedirect className="general_links general_links_bold">
          {OFFER_NAME}
        </TelegramRedirect>{" "}
        dovoli vam prejeti dohodek od teh kriptovalut, tudi na medvedjem trgu. 
        Uporablja umetno inteligenco (UI), ki samodejno upravlja dolge in kratke 
        prodaje namesto vas, tako da lahko služite denar dan in noč, tudi medtem k
        o spite.
      </p>
      <p className="text_general_content">
        <TelegramRedirect className="general_links general_links_bold">
          {OFFER_NAME}
        </TelegramRedirect>{" "}
        podpira ga nekaj izmed najbolj pametnih tehnoloških pameti, ki so kadarkoli obstajale.{" "}
        <b>Richard Branson, Elon Musk ter Bill Gates</b> so nekateri izmed teh.
      </p>
      <img src={BC} alt="BC" className="image_responsive" />
      <p className="text_image_below">
        Bill Gates ter Richard Branson se pogovarjata o{" "}
        <TelegramRedirect className="general_links general_links_bold">
          {OFFER_NAME}
        </TelegramRedirect>{" "}
        pri CES 2023.
      </p>
      <p className="text_general_content">
        Ti tehnološki geniji so zgradili več milijardna podjetja, ki rešujejo zapletene 
        težave kot so spletna plačila, računalniška obdelava ter prevoz. Sedaj se lotevajo 
        svetovne težave neenakopravnosti bogastva, tako da dovolijo komerkoli - ne glede na 
        to kako bogati ali revno so -, da služi{" "}
        <b>
          dovolj denarja za uživanje srečnega in celostnega življenja.
        </b>
      </p>
      {displayReadMore && (
        <button
          type="button"
          className="read_more"
          onClick={() => {
            props.oppenReadMore(true);
            setDisplayReadMore(false);
          }}
        >
          Preberite celoten članek
        </button>
      )}
    </article>
  );
};