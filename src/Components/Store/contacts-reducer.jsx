import phone from "../../Image/phone.png";
import email from "../../Image/email.png";
import location from "../../Image/location.png";

export const initialState = {
    contacts: [{id: 1, type: 'Phone', text: '+375 (44) 513-13-68', src: phone},
        {id: 2, type: 'Email', text: 'vlasmaskalenchik1998@gmail.com', src: email},
        {id: 3, type: 'Location', text: 'Minsk, Belarus', src: location}]
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {...state}
    }
}
