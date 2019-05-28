const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';

let initialState = {
    dialogs:
        [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Vasya' },
            { id: 3, name: 'Petr' },
            { id: 4, name: 'Gosho' },
            { id: 5, name: 'Luiza' },
            { id: 6, name: 'Sveta' },
        ],

    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is your web programming?' },
        { id: 4, message: 'Yep' },
        { id: 5, message: 'Yo' }
    ],
    newMessText: 'you will be developer almost'
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESS:
                let body = state.newMessText;
                state.newMessText = '';
                state.messages.push({id: 1, message: body});
                return state;
        case UPDATE_NEW_MESS_TEXT:
                state.newMessText = action.newBody;
                return state;
        default:
                return state;
    }
}

export const addMessActionCreator = () => ({type: ADD_MESS})
export const updateNewMessTextActionCreator = (text) => ({type: UPDATE_NEW_MESS_TEXT, newBody: text})

export default dialogsReducer;