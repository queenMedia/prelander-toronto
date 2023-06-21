import "./steps.css"
import { StepCard } from "../../components/stepCard/stepCard"
import { stepsData } from "../../assets/utils/utils.steps.js"
import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

export const Steps = () => {
    return (
        <div className="steps-section">
            <h5 className="steps-title">
                <TelegramRedirect>Suivez les 3 étapes simples pour commencer:</TelegramRedirect>
            </h5>
            {stepsData.map((item, index) => {
                return (
                    <StepCard
                        key={index}
                        currentStep={item}
                    />
                )
            })}
        </div>
    );
};
  