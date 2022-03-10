import React from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'
import NavBar from './NavBar'
import Cart from './Cart'

function Header() {
    return (
        <header className='header'>
            <div className="header__logo">
                <Logo className='header__logo-img' />
            </div>
            <NavBar />
            <Cart />
            <a href='#' className='header__user'>
                <img src={require("../images/image-avatar.png")} alt="user" className="header__user-img" />
            </a>
        </header>
    )
}

export default Header