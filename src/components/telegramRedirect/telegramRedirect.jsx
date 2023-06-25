import { handleRoute } from "../../utils/telegram"

export function TelegramRedirect({children, className}) {
    
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={handleRoute} className={className}>
            {children}
        </a>
    )
}