import {EmailMain, EmailStyle} from "./EmailStyled";
import {memo} from "react";

export const Email = memo(() => {
    return <EmailMain>
        <EmailStyle>
            <input type="text" placeholder={'Your Email'}/>
            <input type="text" placeholder={'Your Name'}/>
        </EmailStyle>
        <textarea placeholder='Your Message...'/>
        <button>Send</button>
    </EmailMain>
})