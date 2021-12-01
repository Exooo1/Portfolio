import React,{memo} from "react";
import {SkillStyled} from "./SkillStyled";

export const Skill = memo(({skill, color, src, description, id}) => {
    return <SkillStyled boxColor={`0 0 20px ${color}`} colorText={color} timeAnim={`${id - 1}s`}>
        <div>
            <img
                src={src}
                alt="skill"/>
        </div>
        <h2>{skill}</h2>
        <p>{description}</p>
    </SkillStyled>
})