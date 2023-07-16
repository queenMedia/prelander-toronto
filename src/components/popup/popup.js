import "./popup.css";
import { useState, useEffect, useMemo } from "react";
import { handleRoute, MODAL, OFFER } from "../../config";
import iconClose from "../../assets/icons/icon-close-white.svg";

const backgroundButtonColors = {
  "bitcoin360ai": "#fece01",
  "bitcoincode": "#d65b07",
  "bitcoinera": "#e98102",
  "bitgpt": "#f8d263",
  "bitsoft360": "#cbff01",
  "immediateedge": "#7ed322",
  "quantumai": "#588d9d"
};
const textButtonColors = {
  "bitcoin360ai": "#000",
  "bitcoincode": "#fff",
  "bitcoinera": "#fff",
  "bitgpt": "#000",
  "bitsoft360": "#000",
  "immediateedge": "#000",
  "quantumai": "#fff"
}

const Popup = () => {
  const [showModal, setShowModal] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const bgBtnColor = useMemo(() => {
    return backgroundButtonColors[OFFER];
  }, []);
  const txtBtnColor = useMemo(() => {
    return textButtonColors[OFFER];
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = MODAL;

    img.onload = () => {
      setDimensions({ width: (img.width+66), height: (img.height+66) });
    };
    const interval = setInterval(() => {
      setShowModal(true);
    }, 50000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className="popup" onClick={() => closeModal()}>
          <div
           className="popup_container"
           style={{...dimensions, background: `url(${MODAL}) no-repeat center/cover`}}
          >
            <div className="popup_container_close_container">
              {<img
                onClick={() => closeModal()}
                className="popup_close"
                src={iconClose}
                alt="close" 
              />}
            </div>
            <p className="popup_container_title_container">
              <span className="popup_container_title">Ne zamudite!</span><br/>
              <span className="popup_container_subtitle">To je vaša zadnja priložnost, da se udeležite</span>
            </p>
            <button 
              onClick={() => handleRoute("popup-button")} 
              className="popup_button" 
              style={{backgroundColor: bgBtnColor, color: txtBtnColor}}
            >
              Začnite zdaj
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
