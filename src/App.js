import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {Menu} from "./Components/Menu/Menu";
import {useEffect, useState} from "react";
import {Provider} from 'react-redux'
import {store} from './Components/Store/Store'

export const App = () => {
    const [page, setPage] = useState(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPage(window.pageYOffset)
            console.log(window.pageYOffset)
        })
        return () => window.addEventListener('scroll', () => {
            setPage(window.pageYOffset)
        })
    }, [])

    return (
        <Provider store={store}>
            <div className="App">
                <Menu page={page}/>
                <Main/>
                <Skills page={page}/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </Provider>
    );
}

