import React, {useEffect, memo, useState} from "react";
import {AvatarStyle, DescriptionStyle, MainStyle} from "./MainStyled";
import {ContainerStyled} from "../common/CommonStyled";
import me2 from '../../Image/me2.jpg'
import {useDispatch, useSelector} from "react-redux";
import {ChangeAnimAC, ChangeCountAC, ChangeTextAC} from "../Store/main-reducer";
import {SetRangeAC} from "../Store/menu-reducer";
import {ModalAboutMe} from "../Modal/ModalAboutMe";
import {AboutMeStyle} from "../Modal/ModalAboutMeStyle";
import resume from '../../Image/resume.pdf'

export const Main = memo(({page}) => {
    const [isModal, setIsModal] = useState(false)
    const dispatch = useDispatch()
    const anim = useSelector(state => state.main.anim)
    const descrip = useSelector(state => state.main.descrip)
    const count = useSelector(state => state.main.count)
    const text = useSelector(state => state.main.text)
    let time = ''
    useEffect(() => {
        const h1 = "- I'M VLAS MASKALENCHIK."
        if (h1.split('')[count] !== undefined) return time = setTimeout(() => {
            dispatch(ChangeCountAC())
            dispatch(ChangeTextAC(h1.split('')[count]))
        }, 100)
        clearTimeout(time)
        dispatch(ChangeAnimAC())
    }, [text])

    useEffect(() => {
        dispatch(SetRangeAC('Home', document.getElementById('home').clientHeight, 0))
    }, [page])

    return <MainStyle id='home'>
        <ContainerStyled>
            <div className='image'>
                <img src={me2}
                     alt="avatar"/>
            </div>
            <AvatarStyle></AvatarStyle>
            <DescriptionStyle>
                <h1>{text} {text.length !== 24 ? <span>_</span> : null}</h1>
                {anim && <h1 className={'animationText'}>FRONTEND DEVELOPER</h1>}
                <p>{descrip}</p>
                <button onClick={() => setIsModal(true)}>MORE ABOUT ME</button>
                {isModal && <ModalAboutMe setIsModal={() => setIsModal(false)}>
                    {<AboutMeStyle>
                        <h1><span>ABOUT</span> ME</h1>
                        <h2>PORTFOLIO</h2>
                        <div className={'personalInfo'}>
                            <div>
                                <h2>PERSONAL INFOS</h2>
                                <div>
                                    <div>
                                        <p>First Name: <span>Vlas</span></p>
                                        <p>Age: <span>24</span></p>
                                        <p>Telegram: <a href='https://t.me/Vlasmaskalenchik'>Profile</a></p>
                                        <p>Phone: <span>+375(44)5131368</span></p>
                                    </div>
                                    <div>
                                        <p>Last Name: <span>Maskalenchik</span></p>
                                        <p>Address: <span>Minsk</span></p>
                                        <p>Linkedin: <a target={'_blank'}
                                                        href={'https://www.linkedin.com/in/vlasmaskalenchik/'}>Profile</a>
                                        </p>
                                        <p>Languages: <span>Russian,English</span></p>
                                    </div>
                                </div>
                                <button><a href={resume} download>Download CV</a></button>
                            </div>
                            <div className={'exp'}>
                                <div className={'childExp'}>
                                    <div>
                                        <h1>6+</h1>
                                        <p><span>-</span> MONTH OF EXPERIENCE</p>
                                    </div>
                                </div>
                                <div className={'childExp'}>
                                    <div>
                                        <h1>5+</h1>
                                        <p><span>-</span> COMPLETED PROJECTS</p>
                                    </div>
                                </div>
                                <div className={'childExp'}>
                                    <div>
                                        <h1>2+</h1>
                                        <p><span>-</span> COMPLETED COURSES</p>
                                    </div>
                                </div>
                                <div className={'childExp'}>
                                    <div>
                                        <h1>15+</h1>
                                        <p><span>-</span> OVER 15 SKILLS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AboutMeStyle>}
                </ModalAboutMe>}
            </DescriptionStyle>
        </ContainerStyled>
    </MainStyle>
})