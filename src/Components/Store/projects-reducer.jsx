import todo from "../../Image/todo.jpg";
import duo from '../../Image/duo.png';
import samurai from '../../Image/samurai.png';
import game from '../../Image/game.jpg';


export const initialState = {
    projects: [{id: 1, title: 'SocialNetwork', project: samurai, href: ''},
        {id: 3, title: 'Lingualeo', project: duo, href: 'https://607dfb866e98a80007e77fb5--agitated-albattani-a2ce8b.netlify.app/'},
        {id: 2, title: 'TodoList', project: todo, href: 'https://neverwinternights.github.io/ToDo/#/login'},
        {id: 4, title: 'TruthOrDare', project:game , href: 'https://game-truthordare.netlify.app/'},
        {id: 5, title: 'Cards', project:'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3639999/playing-cards-social.jpg' , href: 'https://alfilip.github.io/cards/#/login'},
    ]
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
