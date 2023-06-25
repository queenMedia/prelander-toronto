import "./miniModal.css";
import { handleRoute } from "../../utils/telegram";
import DOLLAR from "../../assets/images/dollaricon-1.png";
const MiniModal = () => {
  return (
    <div className="miniModal" onClick={() => handleRoute("miniModal")}>
      <img src={DOLLAR} />
      <div>
        <p>Quelqu'un de Esch-sur-Alzette a retiré €135</p>
        <p>MAINTENANT</p>
      </div>
    </div>
  );
};
export default MiniModal;
