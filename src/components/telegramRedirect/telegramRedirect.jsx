import { handleRoute } from "../../config"

export function TelegramRedirect({children, className}) {
    
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <span onClick={handleRoute} className={className}>
            {children}
        </span>
    )
}