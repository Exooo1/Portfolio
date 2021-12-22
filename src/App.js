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
    const [page, setPage] = useState()
    const [inner, setInner] = useState(0)
    console.log(page,inner)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPage(window.scrollY)
            setInner(document.documentElement.scrollHeight - window.innerHeight)
        })
        return () => window.addEventListener('scroll', () => {
            setPage(window.scrollY)
        })
    }, [page])

    return (
        <Provider store={store}>
            <div className="App" id={'app'}>
                <Menu page={page} inner={inner}/>
                <Main page={page}/>
                <Skills page={page}/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </Provider>
    );
}

