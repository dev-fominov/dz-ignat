import React from 'react'
// import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import s from '../../p1-main/m1-ui/u1-app/App.module.css';
import { PATH } from './Pages';

function Header() {
    return (
        <div>
            {/* // add NavLinks */}
            <div className={s.menu}>
                <NavLink to={PATH.PRE_JUNIOR} >PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} >Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} >Junior +</NavLink>
                <div className={s.btn}>+</div>
            </div>
        </div>
    )
}

export default Header
