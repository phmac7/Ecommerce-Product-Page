import React from 'react'

function Gallery() {
    return (
        <section className='gallery'>
            <div className="gallery__content">
                <img src={require('../images/image-product-1.jpg')} alt="image 1" className="gallery__active" />
                <div className="gallery__thumbnails-list">
                    <img src={require('../images/image-product-1-thumbnail.jpg')} alt="image 1" className="gallery__thumbnails-item" />
                    <img src={require('../images/image-product-2-thumbnail.jpg')} alt="image 2" className="gallery__thumbnails-item" />
                    <img src={require('../images/image-product-3-thumbnail.jpg')} alt="image 3" className="gallery__thumbnails-item" />
                    <img src={require('../images/image-product-4-thumbnail.jpg')} alt="image 4" className="gallery__thumbnails-item" />
                </div>
            </div>
        </section>
    )
}

export default Gallery