import React from 'react'
import { ReactComponent as Minus } from '../images/icon-minus.svg'
import { ReactComponent as Plus } from '../images/icon-plus.svg'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'

function CartButton() {
    return (
        <div className='cartbuttons'>
            <div className="container-qty">
                <button className='container-qty__minus'>
                    <Minus />
                </button>
                <span className='qty'> 0 </span>
                <button className="container-qty__plus">
                    <Plus />
                </button>
            </div>
            <button className='addcart'>
                <CartIcon />
                <span> Add to Cart </span>
            </button>
        </div>
    )
}

export default CartButton