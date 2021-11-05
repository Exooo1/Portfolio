import React from "react";
import style from './main.module.css'
import containerStyle from '../common/styles/container.module.css'

export const Main = () => {
    return <div className={style.mainStyle}>
        <div className={containerStyle.container}>
            <div className={style.description}>
                <h1>Hello my name is Vlas</h1>
                <span>i am a frontend developer</span>
            </div>
            <div className={style.divAvatar}><img src="https://vibirai.ru/image/1044019.w640.jpg" alt="avatar"/></div>
        </div>
    </div>
}