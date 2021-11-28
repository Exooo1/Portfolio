import React from "react";
import {Contact} from "./Contact/Contact";
import {ContactsStyle} from "./StyledContacts";
import phone from '../../Image/phone.png'
import email from '../../Image/email.png'
import location from '../../Image/location.png'
import {Email} from "./Email/Email";

const contacts = [
    {id: 1, type: 'Phone', text: '+375 (44) 513-13-68', src: phone},
    {id: 2, type: 'Email', text: 'vlasmaskalenchik1998@gmail.com', src: email},
    {id: 3, type: 'Location', text: 'Minsk, Belarus', src: location}
]

export const Contacts = () => {
    return <ContactsStyle id={'contacts'}>
        <h1>GET IN TOUCH</h1>
        <div>"</div>
        <div>"</div>
        <div className='containerContacts'>
            <div className='contactStyle'>
                {contacts.map(item => <Contact key={item.id} type={item.type} text={item.text} src={item.src}/>)}
            </div>
            <div>
                <Email/>
            </div>
        </div>
    </ContactsStyle>
}