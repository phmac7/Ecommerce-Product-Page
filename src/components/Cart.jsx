import React from 'react'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'

function Cart() {
    return (
        <div className='cart'>
            <button className='cart__button'>
                <CartIcon className='cart__icon' />
            </button>
        </div>
    )
}

export default Cart