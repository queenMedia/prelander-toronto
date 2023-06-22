import "./commentItem.css"


import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

export function CommentItem({currentComment}) {
    return(
        <div className="comment-item">
            <TelegramRedirect>
                <img className="fb-profile-photo" src={currentComment.img} alt="" />
            </TelegramRedirect>
            <div className="comment-content">
                <div className="comment-text">
                    <TelegramRedirect className="fb-comment-name">{currentComment.name} </TelegramRedirect> 
                    {currentComment.text}  
                </div>
                <div className="comment-likes">
                    <TelegramRedirect>Responder .</TelegramRedirect>
                    {currentComment.likes}             

                    <TelegramRedirect> Gostar</TelegramRedirect>
                    <span className="comment_like_underline">{(currentComment.hours ? `${currentComment.hours} horas` : `${currentComment.minutes} minutos atrás`)}</span>
                </div>
            </div>
        </div>
    )
}