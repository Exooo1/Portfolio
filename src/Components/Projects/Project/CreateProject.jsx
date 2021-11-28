import React from "react";
import {ProjectStyle} from "./ProjectStyle";


export const CreateProject = ({title, project}) => {
    return <ProjectStyle title={title}>
        <img
            src={project}
            alt="project"/>
    </ProjectStyle>
}