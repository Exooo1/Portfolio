import React from "react";
import containerStyle from '../common/styles/container.module.css'
import style from './skills.module.css'
import {Skill} from "./skill/skill";

export const Skills = () => {
    return <div className={style.skillsStyle}>
        <div className={`${containerStyle.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>Skills</h2>
            <div className={style.skills}>
               <Skill/>
               <Skill/>
               <Skill/>
               <Skill/>
               <Skill/>
            </div>
        </div>
    </div>
}