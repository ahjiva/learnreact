import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

// DialogItem и Message это все компоненты
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
    <div className={s.item}>
        <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg'></img>
       <span className={s.dialog + ' ' + s.active}> <NavLink to={path}>{props.name}</NavLink></span>
    </div>)
    {/* <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div> */}
    
}

export default DialogItem;