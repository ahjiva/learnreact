import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { addMessActionCreator, updateNewMessTextActionCreator } from '../../redux/dialogs-reducer';

// DialogItem и Message это все компоненты

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    // из массива объектов dialogData.dialogs получаем массив элементов
    // мы на базе объекта, получили jsx элемент (jsx массив) < />
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = state.messages

        .map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessText;

    let onSendMessageClick = () => {
        props.store.dispatch (addMessActionCreator());
    };

    let onSendMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessTextActionCreator(body))
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {/* реакт понимает что здесь {dialogsElements} массив JSX элементов и отрисовывает их */}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
             <div>
                <textarea   value= { newMessageBody } 
                            onChange={ onSendMessageChange }  
                            placeholder='Enter your message'
                />
            </div>
            <div>
                <button onClick = { onSendMessageClick }>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;