import React, {useEffect, memo} from "react";
import {Skill} from "./skill/skill";
import {SkillsStyle} from "./SkillsStyled";
import {CommonContainer} from "../common/CommonStyled";
import {useDispatch, useSelector} from "react-redux";
import {SetRangeAC} from "../Store/menu-reducer";

export const Skills = memo(({page}) => {
    const skill = useSelector(state => state.skills.skill)
    const dispatch = useDispatch()
    useEffect(() => {
        const clientHeight = document.getElementById('skill').clientHeight
        const clientHome = document.getElementById('home').clientHeight
        dispatch(SetRangeAC('Skills', clientHeight + clientHome, clientHome))
    }, [page])
    return <SkillsStyle id='skill'>
        <div className='containerSkills'>
            <h1><span>MY</span> SKILLS</h1>
            {page > 350 && <h2>PORTFOLIO</h2>}
            <CommonContainer>
                {page > 350 &&
                skill.map((item) => <Skill key={item.id + item.color} id={item.id} description={item.description}
                                           src={item.src}
                                           color={item.color} skill={item.skill}/>)}
            < /CommonContainer>
        </div>
    </SkillsStyle>
})