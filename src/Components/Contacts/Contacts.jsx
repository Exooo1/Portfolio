import React from "react";
import styleContainer from '../common/styles/container.module.css'
import style from './contacts.module.css'
import {Contact} from "./Contact/Contact";

export const Contacts = () => {
    return <div className={style.contacts}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2>Contacts</h2>
            <Contact/>
            <button>Send</button>
        </div>
    </div>
}