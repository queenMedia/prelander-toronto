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
                    <TelegramRedirect>Odgovorite .</TelegramRedirect>
                    {currentComment.likes}             

                    <TelegramRedirect> Všečkajte</TelegramRedirect>
                    <span className="comment_like_underline">{(currentComment.hours ? `${currentComment.hours} urama` : `${currentComment.minutes} minut nazaj`)}</span>
                </div>
            </div>
        </div>
    )
}