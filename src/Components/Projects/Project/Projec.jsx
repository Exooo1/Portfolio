import React from "react";
import style from './project.module.css';

export const Projec = () => {
    return <div className={style.projectStyle}>
        <div className={style.divImg}>
            <a href="some"><img
                src="https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg"
                alt="project"/></a>
        </div>
        <div className={style.description}>
            <div>
                <span>name</span>
            </div>
            <div>
                <p>Описание — композиционная форма, которую используют в литературоведении и лингвистике для
                    подробной характеристики предметов или явлений. </p>
            </div>
        </div>
    </div>
}