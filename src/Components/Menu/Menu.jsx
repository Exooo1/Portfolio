import React from "react";
import {MenuStyle} from "./MenuStyled";
import home from '../../Image/home.png'
import skills from '../../Image/skills.png'
import projects from '../../Image/projects.png'
import contacts from '../../Image/contacts.png'

export const Menu = () => {
    return <MenuStyle>
        <div>
            <a href="#home" title={'Home'}><img
                src={home}
                alt="home"/></a>
            <a href="#skill" title={'Skills'}><img src={skills}
                                             alt="skills"/></a>
            <a href="#projects" title={'Projects'}><img src={projects}
                                               alt="projects"/></a>
            <a href="#contacts" title={'Contacts'}><img src={contacts}
                                               alt="contacts"/></a>

        </div>
    </MenuStyle>
}