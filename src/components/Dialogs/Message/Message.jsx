import React from 'react';
// import { addMessActionCreator, updateNewMessTextActionCreator } from '../../../redux/state';
import s from './../Dialogs.module.css';
// DialogItem и Message это все компоненты

const Message = (props) => {
    
    // let newPostElement = React.createRef();

    // let addPost = () => { 
    //     props.dispatch (addMessActionCreator());
    // }

    // let onChangePost = () => {
    //    let text = newPostElement.current.value;
    //    let action = updateNewMessTextActionCreator(text);
    //     props.dispatch (action);
    // }

    return (
        
      <div className={s.dialog}>
            {props.message}
            </div>

    )
}

export default Message;