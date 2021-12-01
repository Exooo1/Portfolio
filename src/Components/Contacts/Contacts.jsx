import React, {memo} from "react";
import {Contact} from "./Contact/Contact";
import {ContactsStyle} from "./StyledContacts";
import {Email} from "./Email/Email";
import {useSelector} from "react-redux";

export const Contacts = memo(() => {
    const contacts = useSelector(state=>state.contacts.contacts)
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
})