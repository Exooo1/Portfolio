import React from "react";
import style from './contact.module.css'

export const Contact = () => {
    return <form action="" className={style.contact}>
        <div className={style.inputs}>
            <input type="text"/>
            <input type="text"/>
            <textarea name="" id="" cols="30" rows="10"/>
        </div>
    </form>
}