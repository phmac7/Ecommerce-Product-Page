import React, { useContext } from 'react'
import { MyContext } from '../context'
import { ReactComponent as TrashCan } from '../images/icon-delete.svg'

function CartContent() {

    const context = useContext(MyContext)
    const { qtyCart, resetCart } = context
    const price = 125.00

    return (
        <div className='cart-product'>
            <div className='cart-product__info'>
                <img className='cart-product__info--img' src={require('../images/image-product-1-thumbnail.jpg')} alt="image-1" />
                <div className='cart-product__info--text'>
                    <p className='cart-product__info--text-title'>Fall Limited Edition Sneakers</p>
                    <span className='cart-product__info--text-price'>${price.toFixed(2)} x {qtyCart}
                        <span className='cart-product__info--text-total'> ${(price * qtyCart).toFixed(2)}</span>
                    </span>
                </div>
                <button onClick={resetCart} className='cart-product__info--delete'>
                    <TrashCan />
                </button>

            </div>
            <button className='cart-product__btn'>
                Checkout
            </button>
        </div>
    )
}

export default CartContent