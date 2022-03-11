import React, { useContext } from 'react'
import { ReactComponent as Minus } from '../images/icon-minus.svg'
import { ReactComponent as Plus } from '../images/icon-plus.svg'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'
import { MyContext } from '../context'

function CartButton() {
    const context = useContext(MyContext)
    const { selectQty, addSelectQty, decreaseSelectQty, addToCart } = context

    return (
        <div className='cartbuttons'>
            <div className="container-qty">
                <button onClick={decreaseSelectQty} className='container-qty__minus'>
                    <Minus />
                </button>
                <span className='qty'> {selectQty} </span>
                <button onClick={addSelectQty} className="container-qty__plus">
                    <Plus />
                </button>
            </div>
            <button onClick={addToCart} className='addcart'>
                <CartIcon className='addcart__carticon' />
                <span className='addcart__text'> Add to Cart </span>
            </button>
        </div>
    )
}

export default CartButton