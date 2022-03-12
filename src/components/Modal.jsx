import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ReactComponent as Close } from '../images/icon-close.svg'
import { ReactComponent as Previous } from '../images/icon-previous.svg'
import { ReactComponent as Next } from '../images/icon-next.svg'

function Modal({ id, selected, setShowModal }) {
    const [modalSelected, setModalSelected] = useState(selected)

    const toPrevious = () => {
        if (modalSelected > 1) {
            setModalSelected(modalSelected - 1)
        }
    }
    const toNext = () => {
        if (modalSelected < id.length) {
            setModalSelected(modalSelected + 1)
        }
    }
    //exit clicking on background
    const background = useRef()
    const closeModal = (e) => {
        if (background.current === e.target) {
            setShowModal(false)
        }
    }

    //exit pressing esc
    const keyPress = useCallback(e => {
        if (e.key === 'Escape') {
            setShowModal(false)
        }
    }, [setShowModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress])



    return (
        <div onClick={closeModal} ref={background} className='modal__background'>
            <div className="modal__container">
                <section className='gallery'>
                    <div className="gallery__content">
                        <img src={require(`../images/image-product-${modalSelected}.jpg`)} alt={`${modalSelected} selected`} className="modal__active" />
                        <div className="modal__thumbnails-list">
                            {id.map((i) => {
                                return (
                                    <div onClick={() => setModalSelected(i)} key={i} className={modalSelected === i ? 'modal__thumbnails-container border-active' : 'modal__thumbnails-container'}>
                                        <img src={require(`../images/image-product-${i}-thumbnail.jpg`)} alt={`${i}`} className={modalSelected === i ? "modal__thumbnails-item thumbnails-modal-active" : "modal__thumbnails-item"} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </section>

                <button onClick={toPrevious} className='icon__container-previous'>
                    <Previous className='icon__previous' />
                </button>
                <button onClick={toNext} className='icon__container-next'>
                    <Next className='icon__next' />
                </button>
                <Close onClick={() => setShowModal(false)} className='icon__close' />


            </div>
        </div>
    )
}

export default Modal