import React, { useState } from 'react';

function ImageToggle() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const showImage = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div>
      <button onClick={showImage}>
        {isImageVisible ? 'Ukryj' : 'Pokaż'} obrazek
      </button>
      
      {isImageVisible && (
        <div>
          <img 
            src="./test.png" 
            alt="Przykładowy obrazek" 
            style={{ marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageToggle;