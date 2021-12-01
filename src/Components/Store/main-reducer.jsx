const initialState = {
    descrip: "Hi, my name is Vlas, I position myself as a strong front-end\n" +
        "                    developer. I have experience creating SPA with React /\n" +
        "                    Redux / TypeScript. Every day i improve my skills and learn\n" +
        "                    new technologies.I try to solve a couple of tasks a week on Codewars.",
    anim: false,
    count: 0,
    text: ''
}

export const mainReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case 'CHANGE_ANIM':
            return {...state, anim: !state.anim}
        case 'CHANGE_COUNT':
            return {...state, count: state.count + 1}
        case 'CHANGE_TEXT':
            return {...state, text: state.text += action.text}

        default:
            return {...state}
    }
}

export const ChangeAnimAC = () => {
    return {
        type: 'CHANGE_ANIM'
    }
}
export const ChangeCountAC = () => {
    return {
        type: 'CHANGE_COUNT'
    }
}
export const ChangeTextAC = (text) => {
    return {
        type: 'CHANGE_TEXT',
        text
    }
}

