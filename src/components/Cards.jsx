import React from 'react';
import images from './images';

function Cards() {
    return (
        <div className='cards'>
            {images.map(image => (
                <div key={image.id} className='card'>
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        width={300} 
                        height={300} 
                        layout="responsive"
                    />
                </div>
            ))}
        </div>
    )
}

export default Cards;