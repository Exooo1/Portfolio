import React, {useEffect} from 'react'
import * as ReactDOM from "react-dom";
import {ModalHeadStyle, ModalStyle} from "./ModalAboutMeStyle";


export const ModalAboutMe = ({children, setIsModal}) => {
    useEffect(() => {
        const body = document.querySelector('body');
        if (body) body.style.overflow = 'hidden';
        return () => {
            if (body) body.style.overflow = 'auto';
        };
    }, [])
    return ReactDOM.createPortal(<ModalHeadStyle onClick={setIsModal}>
        <ModalStyle onClick={(e) => e.stopPropagation()}>
            {children}
        </ModalStyle>
        <button>
            <hr/>
            <hr/>
        </button>
    </ModalHeadStyle>, document.getElementById('portal'))
}