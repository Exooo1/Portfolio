import React from 'react'
import {Nav} from '../Nav/Nav'
import style from './header.module.css'


export const Header = () => {
    return <div className={style.headerStyle}>
        <Nav/>
    </div>
}