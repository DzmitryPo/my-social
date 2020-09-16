import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return <navbar className={s.item}>
        <div className={`${s.item} ${s.link}`}>NAVBAR LEFT 1</div>
        <div className={`${s.item} ${s.link} ${s.active}`}>NAVBAR LEFT 2</div>
        <div className={`${s.item} ${s.link}`}>NAVBAR LEFT 3</div>
        <div className={`${s.item} ${s.link}`}>NAVBAR LEFT 4</div>
    </navbar>
}

export default Navbar;