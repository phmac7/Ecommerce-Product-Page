import React, { useState } from 'react'

function Gallery() {

    const id = [1, 2, 3, 4]
    const [selected, setSelected] = useState(1)

    return (
        <section className='gallery'>
            <div className="gallery__content">
                <img src={require(`../images/image-product-${selected}.jpg`)} alt="image 1" className="gallery__active" />
                <div className="gallery__thumbnails-list">
                    {id.map((i) => {
                        return (
                            <div onClick={() => setSelected(i)} key={i} className={selected == i ? 'thumbnail-container border-active' : 'thumbnail-container'}>
                                <img src={require(`../images/image-product-${i}-thumbnail.jpg`)} alt="image 2" className={selected == i ? "gallery__thumbnails-item thumbnails-active" : "gallery__thumbnails-item"} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Gallery