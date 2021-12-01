import {ContactStyle} from "./ContactStyled";
import {memo} from "react";


export const Contact = memo(({type, text, src}) => {
    return <ContactStyle>
        <img
            src={src}
            alt={type}/>
        <div>
            <h3>{type}</h3>
            <p>{text}</p>
        </div>
    </ContactStyle>
})