import home from "../../Image/home.png";
import skills from "../../Image/skills.png";
import projects from "../../Image/projects.png";
import contacts from "../../Image/contacts.png";

const initialState = {
    menu: [
        {id: 1, href: '#home', title: 'Home', src: home, alt: 'home', range: 0, maxRange: 5, color: '#2B2A2A'},
        {
            id: 2,
            href: '#skill',
            title: 'Skills',
            src: skills,
            alt: 'skill',
            range: 0,
            maxRange: 0,
            color: '#2B2A2A'
        },
        {
            id: 3,
            href: '#projects',
            title: 'Projects',
            src: projects,
            alt: 'projects',
            color: '#2B2A2A',
            range: 0,
            maxRange: 0
        },
        {
            id: 4,
            href: '#contacts',
            title: 'Contacts',
            src: contacts,
            alt: 'contacts',
            color: '#2B2A2A',
            range: 0,
            maxRange: 0
        },
    ]
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RANGE':
            return {
                ...state,
                menu: state.menu.map(item => item.title === action.block ? {
                    ...item,
                    maxRange: action.value,
                    range: action.number
                } : item)
            }
        case 'SET_COLOR':
            return {
                ...state,
                menu: state.menu.map(item => action.page > item.range && action.page < item.maxRange ? {
                    ...item,
                    color: '#FFB400'
                } : {...item, color: '#2B2A2A'})
            }
        default:
            return {...state}
    }
}

export const SetRangeAC = (block, value, number) => {
    return {
        type: 'SET_RANGE',
        block,
        value,
        number
    }
}
export const SetColorAC = (page) => {
    return {
        type: 'SET_COLOR',
        page
    }
}

