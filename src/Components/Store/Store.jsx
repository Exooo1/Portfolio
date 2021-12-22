import {createStore} from "redux";
import {skillReducer} from "./skills-reducer";
import {mainReducer} from "./main-reducer";
import {projectReducer} from "./projects-reducer";
import {contactsReducer} from "./contacts-reducer";
import {menuReducer} from "./menu-reducer";

const {combineReducers} = require("redux");


const rootReducers = combineReducers({
    skills: skillReducer,
    main: mainReducer,
    project: projectReducer,
    contacts: contactsReducer,
    menu: menuReducer
});

export const store = createStore(rootReducers)