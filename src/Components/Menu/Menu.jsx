import React, {memo} from "react";
import {ChildDivStyle, DivStyle, LinkStyle, MenuStyle} from "./MenuStyled";
import home from '../../Image/home.png'
import skills from '../../Image/skills.png'
import projects from '../../Image/projects.png'
import contacts from '../../Image/contacts.png'

const menu = [
    {id: 1, href: '#home', title: 'Home', src: home, alt: 'home', range: 0, maxRange: 937, color: '#2B2A2A'},
    {id: 2, href: '#skill', title: 'Skills', src: skills, alt: 'skill', range: 937, maxRange: 2136, color: '#2B2A2A'},
    {
        id: 3,
        href: '#projects',
        title: 'Projects',
        src: projects,
        alt: 'projects',
        color: '#2B2A2A',
        range: 2136,
        maxRange: 2906
    },
    {
        id: 4,
        href: '#contacts',
        title: 'Contacts',
        src: contacts,
        alt: 'contacts',
        color: '#2B2A2A',
        range: 2906,
        maxRange: 4500
    },
]

export const Menu = memo(({page}) => {

    const changeColorMenu = menu.map(item => page > item.range && page < item.maxRange ? {
        ...item,
        color: '#FFB400'
    } : {...item, color: '#2B2A2A'})
    console.log(page * 0.0522)
    return <MenuStyle>
        <DivStyle height={page * 0.0522}><ChildDivStyle size={page*0.0635}></ChildDivStyle></DivStyle>
        <div className='divStyle'>
            {changeColorMenu.map(item => <LinkStyle color={item.color} href={item.href} title={item.title}><img
                src={item.src}
                alt={item.alt
                }/></LinkStyle>)}
        </div>
    </MenuStyle>
})