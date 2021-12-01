import react from "../../Image/react.png";
import css from "../../Image/css.png";
import html from "../../Image/html.png";
import ts from "../../Image/TS.png";
import axios from "../../Image/axios.png";
import js from "../../Image/JS.png";
import redux from "../../Image/redux.png";
import git from "../../Image/git.png";

const initialState = {
    skill: [
        {
            id: 1,
            color: '#06e3ff',
            skill: 'React',
            src: react,
            description: 'React is an open source JavaScript library for developing user interfaces. React is developed and maintained by Facebook, Instagram, and the community of individual developers and corporations. React can be used to develop single page and mobile apps.'
        },
        {
            id: 2,
            color: '#ffa219',
            skill: 'CSS',
            src: css,
            description: 'CSS is a formal language for describing the appearance of a document written using a markup language. Can also be applied to any XML document such as SVG or XUL.',
        },
        {
            id: 3,
            color: '#e7734e',
            skill: 'HTML',
            src: html,
            description: 'HTML is a standardized document markup language for viewing web pages in a browser. Web browsers receive an HTML document from the server via HTTP / HTTPS protocols or open it from a local disk, then interpret the code into an interface that will be displayed on the monitor screen.'
        },
        {
            id: 4,
            color: '#5b5bff',
            skill: 'TypeScript',
            src: ts,
            description: 'TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends JavaScript.'
        },
        {
            id: 5,
            color: '#e02cff',
            skill: 'Axios',
            src: axios,
            description: 'Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.'
        },
        {
            id: 6,
            color: '#ffe500',
            skill: 'JavaScript',
            src: js,
            description: 'JavaScript is a multi-paradigm programming language. Supports object oriented, imperative and functional styles. It is an implementation of the ECMAScript specification. JavaScript is commonly used as an embedded language for programmatically accessing application objects.'
        },
        {
            id: 7,
            color: 'purple',
            skill: 'Redux',
            src: redux,
            description: 'Redux is an open source JavaScript library for managing application state. Most often used in conjunction with React or Angular for front-end development. Contains a number of tools to greatly simplify the transfer of warehouse data through context.',
        },
        {
            id: 8,
            color: '#e7734e',
            skill: 'Git',
            src: git,
            description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.'
        },
    ]
}

export const skillReducer = (state = initialState, action) => {
    switch (action) {

        default:
            return {...state}
    }
}

