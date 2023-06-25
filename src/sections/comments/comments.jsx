import "./comments.css"
import "./comments.responsive.css"

import { commentsData } from "../../assets/utils/utils.comments"
import { CommentItem } from "../../components/commentItem/commentItem"
import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

export function Comments({config}) {
    console.log(config)
    return(
        <section className="comments-section">
            <div className="comments-content">
                <div className="comments-posts-container">
                    <TelegramRedirect className="link-comments">Comentários # Recentes</TelegramRedirect>
                    {commentsData.map((item, index) => {
                        return (
                            <CommentItem 
                                key={index} 
                                currentComment={item} 
                                offerName={config.OFFER_NAME}
                                />
                        )
                    })}
                </div>
            </div>
           
        </section>
    )
}