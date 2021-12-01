import todo from "../../Image/todo.jpg";
import duo from '../../Image/duo.png';
import samurai from '../../Image/samurai.png';


export const initialState = {
    projects: [{id: 1, title: 'SocialNetwork', project: samurai, href: ''},
        {id: 1, title: 'TodoList', project: todo, href: ''},
        {id: 1, title: 'Lingualeo', project: duo, href: ''},]
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {...state}
    }
}
