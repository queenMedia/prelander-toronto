import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";
import "./stickyFooter.css"
export function StickyFooter() {
    return (
        <div className="sticky-container">
            <div className="sticky-button">
                <TelegramRedirect>Essayez Formule Française par vous-même.</TelegramRedirect>
            </div>
        </div>
    )
};