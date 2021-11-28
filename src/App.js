import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {Menu} from "./Components/Menu/Menu";
import {useEffect, useState} from "react";

export const App = () => {
    console.log('ale')
    const [page, setPage] = useState(window.pageYOffset)
    const handlePage = () => {

        console.log(document.body.scrollTop)
    }
    useEffect(() => {
        window.addEventListener('scroll', handlePage)
        return () => window.addEventListener('scroll', handlePage)
    }, [page])

    return (
        <div className="App">
            <Menu/>
            {/*<Header/>*/}
            <Main/>
            <Skills page={page}/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

