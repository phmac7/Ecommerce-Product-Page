import React, { useState, useEffect } from 'react'
import Gallery from './Gallery'
import Description from './Description'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'

function Product() {
    const id = [1, 2, 3, 4]
    const [selected, setSelected] = useState(1)
    const [showModal, setShowModal] = useState(false)

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId = null;
        const updateSize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => (setSize(window.innerWidth)), 150)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, [])

    return (

        <main className='main'>
            <Gallery
                id={id}
                selected={selected} setSelected={setSelected}
                showModal={showModal} setShowModal={setShowModal}
                size={size} />
            <Description />
            <AnimatePresence>
                {(showModal && (size > 1000))
                    ? <Modal
                        id={id}
                        selected={selected}
                        setShowModal={setShowModal}
                        showModal={showModal} />
                    : null}
            </AnimatePresence>

        </main>
    )
}

export default Product