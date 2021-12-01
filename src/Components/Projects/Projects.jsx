import React, {memo} from "react";
import {CreateProject} from "./Project/CreateProject";
import {ProjectsStyle} from "./ProjectsStyled";
import {CommonStyle} from "../common/CommonStyled";
import {useSelector} from "react-redux";

export const Projects = memo(() => {
    const proj = useSelector(state=>state.project.projects)
    return <ProjectsStyle id={'projects'}>
        <div className='s'>
            <h1><span>MY</span> PROJECTS</h1>
            <h2>PORTFOLIO</h2>
        </div>
        <CommonStyle>
            {proj.map(item=><CreateProject key={item.id} title={item.title} project={item.project} />)}
        </CommonStyle>
    </ProjectsStyle>
})