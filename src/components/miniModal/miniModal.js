import "./miniModal.css";
import { handleRoute } from "../../config";
import DOLLAR from "../../assets/images/dollaricon-1.webp";
const MiniModal = () => {
  return (
    <div className="miniModal" onClick={() => handleRoute("miniModal")}>
      <img loading="lazy"  src={DOLLAR} />
      <div>
        <p>Quelqu'un de Esch-sur-Alzette a retiré €135</p>
        <p>MAINTENANT</p>
      </div>
    </div>
  );
};
export default MiniModal;
