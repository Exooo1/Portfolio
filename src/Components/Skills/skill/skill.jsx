import React from "react";
import {SkillStyled} from "./SkillStyled";

export const Skill = ({skill, color, src, description}) => {
    return <SkillStyled boxColor={`0 0 20px ${color}`} colorText={color}>
        <div>
            <img
                src={src}
                alt="skill"/>
        </div>
        <h2>{skill}</h2>
        <p>{description}</p>
    </SkillStyled>
}