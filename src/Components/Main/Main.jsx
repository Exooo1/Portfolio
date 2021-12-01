import React, {memo, useEffect} from "react";
import {AvatarStyle, DescriptionStyle, MainStyle} from "./MainStyled";
import {ContainerStyled} from "../common/CommonStyled";
import me from '../../Image/me.png'
import {useDispatch, useSelector} from "react-redux";
import {ChangeAnimAC, ChangeCountAC, ChangeTextAC} from "../Store/main-reducer";

export const Main = memo(() => {
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
        }, 200)
        clearTimeout(time)
        dispatch(ChangeAnimAC())
    }, [text])
    return <MainStyle id='home'>
        <ContainerStyled>
            <div className='image'>
                <img src={me}
                     alt="avatar"/>
            </div>
            <AvatarStyle></AvatarStyle>
            <DescriptionStyle>
                <h1>{text} {text.length !== 24 ? <span>_</span> : null}</h1>
                {anim && <h1 className={'animationText'}>FRONTEND DEVELOPER</h1>}
                <p>{descrip}</p>
            </DescriptionStyle>
        </ContainerStyled>
    </MainStyle>
})