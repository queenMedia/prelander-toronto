import { TestimonialCard } from "../testimonialCard/testimonialCard.jsx"
import { testimonialsData } from "../../assets/utils/utils.testimonials.js";
import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

import "./testimonials.css"
export const Testimonials = ({config}) => {
    return (
        <div className="testimonials-section">
            <h5 className="testimonials-title">
                <TelegramRedirect>RESULTADOS DE LEITORES</TelegramRedirect>
            </h5>
            {testimonialsData(config).map((item, index) => {
                return (
                    <TestimonialCard 
                        key={index}
                        currentTestimonial={item}
                        config={config}
                    />
                );
            })}
        </div>
    );
  };
  