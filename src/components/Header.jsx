import React, { useEffect, useState, useCallback } from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'
import NavBar from './NavBar'
import Cart from './Cart'
import { ReactComponent as Menu } from '../images/icon-menu.svg'
import { AnimatePresence } from 'framer-motion'

function Header() {

    const [showNav, setShowNav] = useState(true)
    const [size, setSize] = useState(window.innerWidth)


    useEffect(() => {
        let timeoutId = null;
        const updateSize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => (setSize(window.innerWidth)), 150)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, [])
    useEffect(() => {
        if (size > 375) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }, [size])


    return (
        <header className='header'>
            <button onClick={() => setShowNav(!showNav)} className='menu'>
                <Menu className='menu__svg' />
            </button>
            <div className="header__logo">
                <Logo className='header__logo-img' />
            </div>
            <AnimatePresence>
                {showNav
                    ? <NavBar setShowNav={setShowNav} showNav={showNav} />
                    : null}
            </AnimatePresence>
            <Cart />
            <a href='#' className='header__user'>
                <img src={require("../images/image-avatar.png")} alt="user" className="header__user-img" />
            </a>
        </header>
    )
}

export default Header