import React from "react";
import styleContainer from '../common/styles/container.module.css'
import style from './projects.module.css'
import {Projec} from "./Project/Projec";

export const Projects = () => {
    return <div className={style.projectsStyle}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <h2 className={style.title}>My Projects</h2>
            <div className={style.projects}>
                <Projec/>
                <Projec/>
                <Projec/>
                <Projec/>
            </div>
        </div>
    </div>
}