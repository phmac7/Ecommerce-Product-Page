import React, { useState, useContext } from 'react'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'
import { MyContext } from '../context'
import CardContent from './CartContent'

function Cart() {

    const [isOpen, setIsOpen] = useState(false)
    const context = useContext(MyContext)

    return (
        <>
            <div className='cart'>
                <button onClick={() => setIsOpen(!isOpen)}
                    className='cart__button'>
                    <CartIcon className='cart__icon' />
                    {context.qtyCart === 0 ? null :
                        <span className='cart__notification'>{context.qtyCart}</span>}
                </button>
            </div>
            {isOpen
                ? <div className='cartTab'>
                    <div className='cartTab__header'>
                        <h4 className='cartTab__header--text'>Cart</h4>
                    </div>
                    <div className='cartTab__content'>
                        {context.qtyCart === 0
                            ? <span className='cartTab__content--empty'> Your Cart is Empty</span>
                            : <CardContent />}
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default Cart