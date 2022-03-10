import React from 'react'

function NavBar() {
    return (
        <ul className="header__navigation">
            <li className="header__navigation-item"><a href="#" className="header__navigation-link">Collections</a></li>
            <li className="header__navigation-item"><a href="#" className="header__navigation-link">Men</a></li>
            <li className="header__navigation-item"><a href="#" className="header__navigation-link">Women</a></li>
            <li className="header__navigation-item"><a href="#" className="header__navigation-link">About</a></li>
            <li className="header__navigation-item"><a href="#" className="header__navigation-link">Contact</a></li>
        </ul>
    )
}

export default NavBar