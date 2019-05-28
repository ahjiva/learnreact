import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {

    // let navbarElements = (props.state.messages)
    // .map(d => <NavbarItem name={d.name} />);

    return (
        <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div>
            <a className={s.item}>Music</a>
        </div>
        <div>
            <a className={s.item}>Settings</a>
        </div>
        {/* <br></br><br></br>
        <div>
        {navbarElements}
        </div> */}
    </nav>
    );
}

export default Navbar;