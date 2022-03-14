import React, {memo} from "react";
import {ProjectStyle} from "./ProjectStyle";


export const CreateProject = memo(({title, project, link}) => {
    return <ProjectStyle href={link} title={link ? title : "Soon!"} target={'_blank'}>
        <img
            src={project}
            alt="project"/>
    </ProjectStyle>
})