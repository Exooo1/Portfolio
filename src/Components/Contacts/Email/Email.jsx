import {EmailMain, EmailStyle} from "./EmailStyled";
import {memo} from "react";
import emailjs from 'emailjs-com'

export const Email = memo(() => {
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('ASa')
        emailjs.sendForm('service_c54ul3g', 'template_w23lbtc', e.target, 'user_4l2ZASdMKJhc3DNypEhXk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return <EmailMain>
        <form onSubmit={sendEmail}>
            <EmailStyle>
                <input type="text" placeholder={'Your Email'} name={'email'}/>
                <input type="text" placeholder={'Your Name'} name={'name'}/>
            </EmailStyle>
            <textarea placeholder='Your Message...' name={'message'}/>
            <div className={'divSubmit'}>
                <input type="submit" value="Send" className={'send'}/>
            </div>
        </form>
    </EmailMain>
})