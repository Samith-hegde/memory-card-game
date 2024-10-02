import React from 'react';
import images from './images';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function Cards({onSelectCard}) {
    const shuffledImages = shuffleArray(images);

    return (
        <div className='cards'>
            {shuffledImages.map(image => (
                <div key={image.id} className='card'>
                  <button onClick={() => onSelectCard(image.id)}>
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        width={250} 
                        height={250} 
                        layout="responsive"
                    />
                  </button>
                </div>
            ))}
        </div>
    )
}

export default Cards;