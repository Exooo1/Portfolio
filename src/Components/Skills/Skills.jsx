import React, {memo} from "react";
import {Skill} from "./skill/skill";
import {SkillsStyle} from "./SkillsStyled";
import {CommonContainer} from "../common/CommonStyled";
import {useSelector} from "react-redux";

export const Skills = memo(({page}) => {
    console.log("Skills")
    const skill = useSelector(state=>state.skills.skill)
    return <SkillsStyle id='skill'>
        <div className='containerSkills'>
            <h1><span>MY</span> SKILLS</h1>
            {page > 350 && <h2>PORTFOLIO</h2>}
            <CommonContainer>
                {page > 350 &&
                skill.map((item) => <Skill key={item.id + item.color} id={item.id} description={item.description} src={item.src}
                                           color={item.color} skill={item.skill}/>)}
            < /CommonContainer>
        </div>
    </SkillsStyle>
})