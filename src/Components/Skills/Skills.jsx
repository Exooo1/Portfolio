import React from "react";
import {Skill} from "./skill/skill";
import {SkillsStyle} from "./SkillsStyled";
import {CommonContainer} from "../common/CommonStyled";
import ts from '../../Image/TS.png'
import js from '../../Image/JS.png'
import html from '../../Image/html.png'
import css from '../../Image/css.png'
import axios from '../../Image/axios.png'
import react from '../../Image/react.png'

const skill = [
    {
        id: 1,
        color: '#06e3ff',
        skill: 'React',
        src: react,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 2,
        color: '#ffa219',
        skill: 'CSS',
        src: css,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 3,
        color: '#e7734e',
        skill: 'HTML',
        src: html,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 4,
        color: '#5b5bff',
        skill: 'TypeScript',
        src: ts,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 5,
        color: '#e02cff',
        skill: 'Axios',
        src: axios,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 6,
        color: '#ffe500',
        skill: 'JavaScript',
        src: js,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 6,
        color: '#ffe500',
        skill: 'JavaScript',
        src: js,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
    {
        id: 6,
        color: '#ffe500',
        skill: 'JavaScript',
        src: js,
        description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
    },
]

export const Skills = ({page}) => {
    return <SkillsStyle style={{background: page > 300 ? 'green' : 'yellow'}} id='skill'>
        <div className='containerSkills'>
            <h1><span>MY</span> SKILLS</h1>
            <h2>PORTFOLIO</h2>
            <CommonContainer>
                {skill.map((item) => <Skill description={item.description} key={item.id} src={item.src}
                                            color={item.color} skill={item.skill}/>)}
            < /CommonContainer>
        </div>
    </SkillsStyle>
}