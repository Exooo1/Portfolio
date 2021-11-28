import {ContactStyle} from "./ContactStyled";

export const Contact = ({type, text, src}) => {
    return <ContactStyle>
        <img
            src={src}
            alt={type}/>
        <div>
            <h3>{type}</h3>
            <p>{text}</p>
        </div>
    </ContactStyle>
}