import React from 'react'

function Gallery({ id, selected, setSelected, setShowModal, size }) {

    const onlyif1000 = () => {
        if (size > 1000) {
            setShowModal(true)
        }
    }

    return (
        <>
            <section className='gallery'>
                <div className="gallery__content">
                    <img onClick={onlyif1000} src={require(`../images/image-product-${selected}.jpg`)} alt={`${selected} selected`} className="gallery__active" />
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