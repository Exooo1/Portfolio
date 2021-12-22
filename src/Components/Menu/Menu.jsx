import React, {memo, useEffect, useState} from "react";
import {ChildDivStyle, DivStyle, LinkStyle, MenuStyle} from "./MenuStyled";
import {useSelector} from "react-redux";


export const Menu = memo(({page = 1, inner}) => {
    const menus = useSelector(state => state.menu.menu)
    const [menu, setMenu] = useState([])
    const line = 190 / inner
    useEffect(() => {
        const allo = menus.map(item => {
            const c = document.getElementById(`${item.alt}`)
            const d = c.offsetTop + 200 - c.clientHeight
            if (d < page) {
                return {...item, color: '#FFB400'}
            } else {
                return {...item}
            }
        })
        setMenu(allo)
    }, [page])
    return <MenuStyle>
        <DivStyle><ChildDivStyle size={page * line}></ChildDivStyle></DivStyle>
        <div className='divStyle'>
            {menu.map(item => <LinkStyle color={item.color} href={item.href} title={item.title}><img
                src={item.src}
                alt={item.alt
                }/></LinkStyle>)}
        </div>
    </MenuStyle>
})