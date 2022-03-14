import React from 'react'
import CartButton from './CartButton'

function Description() {
    return (
        <section className='description'>
            <h4 className="description__subtitle">Sneaker Company</h4>
            <h1 className="description__title">Fall Limited Edition Sneakers</h1>
            <p className="description__paragraph">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="price__container-all">
                <div className="price__container">
                    <span className="price__now">$125.00</span>

                    <span className="price__discount">50%</span>
                </div>
                <span className="price__old">$250.00</span>
            </div>
            <CartButton />
        </section>
    )
}

export default Description