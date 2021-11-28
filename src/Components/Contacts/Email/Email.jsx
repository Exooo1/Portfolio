import {EmailMain, EmailStyle, StyledEmails} from "./EmailStyled";

export const Email = () => {
    return <EmailMain>
        <EmailStyle>
            <input type="text" placeholder={'Your Email'}/>
            <input type="text" placeholder={'Your Name'}/>
        </EmailStyle>
        <textarea placeholder='Your Message...'/>
        <button>Send</button>
    </EmailMain>
}