import React from 'react'
import { ReactComponent as Previous } from '../images/icon-previous.svg'
import { ReactComponent as Next } from '../images/icon-next.svg'
import { AnimatePresence, motion } from 'framer-motion'

function Gallery({ id, selected, setSelected, setShowModal, size }) {

    const onlyif1000 = () => {
        if (size > 1000) {
            setShowModal(true)
        }
    }

    //for mobile
    const toNext = () => {
        if (selected < id.length) {
            setSelected(selected + 1)
        } else if (selected === 4) {
            setSelected(1)
        }
    }
    const toPrevious = () => {
        if (selected > 1) {
            setSelected(selected - 1)
        } else if (selected === 1) {
            setSelected(4)
        }
    }



    return (
        <>
            <section className='gallery'>
                <div className="gallery__content">
                    <div className="gallery__active--container">
                        <button onClick={toPrevious} className='gallery__active--previous'>
                            <Previous className='gallery__active--previous-svg' />
                        </button>

                        <AnimatePresence exitBeforeEnter>
                            <motion.img
                                key={selected}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={onlyif1000} src={require(`../images/image-product-${selected}.jpg`)} alt={`${selected} selected`} className="gallery__active" />
                        </AnimatePresence>

                        <button onClick={toNext} className='gallery__active--next'>
                            <Next className='gallery__active--next-svg' />
                        </button>
                    </div>
                    <div className="gallery__thumbnails-list">
                        {id.map((i) => {
                            return (
                                <div onClick={() => setSelected(i)} key={i} className={selected === i ? 'thumbnail-container border-active' : 'thumbnail-container'}>
                                    <img src={require(`../images/image-product-${i}-thumbnail.jpg`)} alt={`${i}`} className={selected === i ? "gallery__thumbnails-item thumbnails-active" : "gallery__thumbnails-item"} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Gallery