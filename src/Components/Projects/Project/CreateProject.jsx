import React, {memo} from "react";
import {ProjectStyle} from "./ProjectStyle";


export const CreateProject = memo(({title, project}) => {
    return <ProjectStyle href={title} title={title}>
        <img
            src={project}
            alt="project"/>
    </ProjectStyle>
})