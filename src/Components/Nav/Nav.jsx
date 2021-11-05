import React from "react";
import style from './nav.module.css'

export const Nav = () => {
    return <div className={style.navStyle}>
        <a href="Main">Main</a>
        <a href="Skills">Skills</a>
        <a href="Projects">Projects</a>
        <a href="Contacts">Contacts</a>
    </div>
}