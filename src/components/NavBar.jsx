import React from 'react'
import { ReactComponent as Close } from '../images/icon-close.svg'
import { AnimatePresence, motion } from 'framer-motion'

function NavBar({ setShowNav, showNav }) {
    return (
        <>
            <motion.ul
                key={showNav}
                initial={{ opacity: 0, y: -900 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -900 }}
                transition={{ duration: .2 }}
                className="header__navigation">
                <Close onClick={() => setShowNav(false)} className='menu__close' />
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">Collections</a></li>
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">Men</a></li>
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">Women</a></li>
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">About</a></li>
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">Contact</a></li>
            </motion.ul>
        </>
    )
}

export default NavBar