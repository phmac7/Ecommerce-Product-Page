import React, { useContext, useEffect, UseEffect, useRef } from 'react'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'
import { MyContext } from '../context'
import CardContent from './CartContent'
import { AnimatePresence, motion } from 'framer-motion'

function Cart() {

    const context = useContext(MyContext)
    const { isCartOpen, setIsCartOpen } = context



    // const cartTab = useRef()

    // const closeTab = (e) => {
    //     if (isCartOpen && cartTab.current !== e.target) {
    //         setIsCartOpen(false)
    //     }
    //     console.log(e.targe == cartTab.current)
    // }

    // useEffect(() => {
    //     document.addEventListener('click', closeTab);
    //     return () => document.removeEventListener('click', closeTab);

    // }, [closeTab])

    return (
        <>
            <div className='cart'>
                <button onClick={() => setIsCartOpen(!isCartOpen)}
                    className='cart__button'>
                    <CartIcon className='cart__icon' />
                    {context.qtyCart === 0 ? null :
                        <span className='cart__notification'>{context.qtyCart}</span>}
                </button>
            </div>

            <AnimatePresence>
                {isCartOpen
                    ?
                    <motion.div
                        key={isCartOpen}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: .1 }}
                        className='cartTab'>
                        <div className='cartTab__header'>
                            <h4 className='cartTab__header--text'>Cart</h4>
                        </div>
                        <div className='cartTab__content'>
                            {context.qtyCart === 0
                                ? <span className='cartTab__content--empty'> Your Cart is Empty</span>
                                : <CardContent />}
                        </div>
                    </motion.div>
                    : null
                }
            </AnimatePresence>
        </>
    )
}

export default Cart