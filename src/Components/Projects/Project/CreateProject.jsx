import React, {memo} from "react";
import {ProjectStyle} from "./ProjectStyle";


export const CreateProject = memo(({title, project}) => {
    console.log("PROJECTS")
    return <ProjectStyle href={title} title={title}>
        <img
            src={project}
            alt="project"/>
    </ProjectStyle>
})