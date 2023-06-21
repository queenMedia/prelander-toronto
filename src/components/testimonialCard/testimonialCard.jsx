import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

import "./testimonialCard.css"

export const TestimonialCard = ({currentTestimonial}) => {
    return (
        <div className="testimonial-card">
            <h5 className="testimonial-card-title">
                <TelegramRedirect>{currentTestimonial.title}</TelegramRedirect>
            </h5>
            <TelegramRedirect>
                <img src={currentTestimonial.img} alt="" className="testimonial-card-image"/>
            </TelegramRedirect>
            <p className="testimonial-card-description">
                <i dangerouslySetInnerHTML={{__html: currentTestimonial.description}}></i>
            </p>
            <p className="testimonial-card-description-2">
                <strong>
                    <i>
                        {currentTestimonial.name_1} <br/>
                        {currentTestimonial.name_2}
                    </i>
                </strong>
            </p>
        </div>
    );
  };
  