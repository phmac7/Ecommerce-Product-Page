import React, { useState } from 'react'

function Gallery({ id, selected, setSelected, showModal, setShowModal }) {

    return (
        <>
            <section className='gallery'>
                <div className="gallery__content">
                    <img onClick={() => setShowModal(true)} src={require(`../images/image-product-${selected}.jpg`)} alt={`${selected} selected`} className="gallery__active" />
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