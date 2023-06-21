import "./comments.css"
import "./comments.responsive.css"

import { commentsData } from "../../assets/utils/utils.comments"
import { CommentItem } from "../../components/commentItem/commentItem"
import { TelegramRedirect } from "../../components/telegramRedirect/telegramRedirect";

export function Comments() {
    return(
        <section className="comments-section">
            <div className="comments-content">
                <div className="comments-posts-container">
                    <TelegramRedirect className="link-comments">Le plus pertinent</TelegramRedirect>
                    {commentsData.map((item, index) => {
                        return (
                            <CommentItem 
                                key={index} 
                                currentComment={item} />
                        )
                    })}
                    <TelegramRedirect className="link-footer"># socialni vtičnik</TelegramRedirect>
                </div>
            </div>
            <p className="all_right_reserve">
                © 2023 Avtorske Pravice Vse Pravice zadržane.
            </p>
        </section>
    )
}