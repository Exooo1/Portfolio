import React from "react";
import style from './footer.module.css'
import styleContainer from '../common/styles/container.module.css'

export const Footer = () => {
    return <div className={style.foot}>
        <div className={`${styleContainer.container} ${style.footContainer}`}>
            <h3>Maskalenchik Vlas</h3>
            <div className={style.blocks}>
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
            </div>
            <p>&copy; Все права защищены</p>
        </div>
    </div>
}