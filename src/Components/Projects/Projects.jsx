import React from "react";
import {CreateProject} from "./Project/CreateProject";
import {ProjectsStyle} from "./ProjectsStyled";
import {CommonStyle} from "../common/CommonStyled";
import samurai from '../../Image/samurai.png'
import todo from '../../Image/todo.jpg'
import duo from '../../Image/duo.png'

export const Projects = () => {
    return <ProjectsStyle id={'projects'}>
        <div className='s'>
            <h1><span>MY</span> PROJECTS</h1>
            <h2>PORTFOLIO</h2>
        </div>
        <CommonStyle>
            <CreateProject title={'SocialNetwork'} project={samurai}/>
            <CreateProject title={'TodoList'} project={todo}/>
            <CreateProject title={'Lingualeo'} project={duo}/>
            <CreateProject title={'Lingualeo'} project={duo}/>
            <CreateProject title={'Lingualeo'} project={duo}/>
        </CommonStyle>
    </ProjectsStyle>
}