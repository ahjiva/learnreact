import React from 'react';
import s from './NavbarItem.module.css';

const NavbarItem = (props) => {



    return (
        <nav className={s.nav}>
        <div className={s.item}>
        <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg'></img>
        {props.sideBar}
        <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg'></img>
        {props.messagesElements}
        <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/master/pass/t-ava-max-interview.jpg'></img>
        {props.dialogsElementsNav}
        </div>
    </nav>
    );
}

export default NavbarItem;