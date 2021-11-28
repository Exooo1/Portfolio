import React from "react";
import {AvatarStyle, DescriptionStyle, MainStyle} from "./MainStyled";
import {ContainerStyled} from "../common/CommonStyled";
import me from '../../Image/me.png'

export const Main = () => {
    return <MainStyle id='home'>
        <ContainerStyled>
            <div className='image'>
                <img src={me}
                     alt="avatar"/>
            </div>
            <AvatarStyle></AvatarStyle>
            <DescriptionStyle>
                <h1>- I'M VLAS MASKALENCHIK.</h1>
                <h1>FRONTEND DEVELOPER</h1>
                <p>I'm a Tunisian based web designer & front‑end developer focused on crafting
                    clean & user‑friendly
                    experiences, I am passionate about building excellent software that improves the lives of those
                    around me.</p>
            </DescriptionStyle>
        </ContainerStyled>
    </MainStyle>
}