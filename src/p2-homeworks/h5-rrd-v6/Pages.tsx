import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import PreJunior from './pages/PreJunior'
import s from '../../p1-main/m1-ui/u1-app/App.module.css';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <div className={s.menu}>
                <NavLink to={PATH.PRE_JUNIOR} >PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} >Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} >Junior +</NavLink>
                <div className={s.btn}>+</div>
            </div>

            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />} />

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
                <Route path={PATH.JUNIOR} element={<Junior />} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404 />} />

            </Routes>
        </div>
    )
}

export default Pages
