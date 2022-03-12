import React, { useState } from 'react'
import Gallery from './Gallery'
import Description from './Description'
import Modal from './Modal'

function Product() {
    const id = [1, 2, 3, 4]
    const [selected, setSelected] = useState(1)
    const [showModal, setShowModal] = useState(false)

    return (
        <main className='main'>
            <Gallery
                id={id}
                selected={selected} setSelected={setSelected}
                showModal={showModal} setShowModal={setShowModal} />
            <Description />
            {showModal ? <Modal
                id={id}
                selected={selected}
                setShowModal={setShowModal} /> : null}

        </main>
    )
}

export default Product