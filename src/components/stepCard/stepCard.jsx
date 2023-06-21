import "./stepCard.css"
import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";
import Check from "../../assets/images/steps/checkmark.png";

export const StepCard = ({currentStep}) => {
    return (
        <div className="step-card">
            <h4 className="step_card_title_container">
                <img src={Check} alt="Check" className="check_step_image" />
                <TelegramRedirect>{currentStep.title}</TelegramRedirect>
            </h4>
            <p>
                <TelegramRedirect><strong>{currentStep.description}</strong></TelegramRedirect>
            </p>
            <TelegramRedirect>
                <img src={currentStep.img} alt="step img" className="card_img_content_step" />
            </TelegramRedirect>
        </div>
    );
};
  