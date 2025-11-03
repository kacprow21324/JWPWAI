import React, { useState } from 'react';  
function RotatingImage() {
  const [rotation, setRotation] = useState(0);

  function handleClick() {
      setRotation(prevRotation => prevRotation + 90);
  }

  return (
    <div>
        <img
          src="./test.png"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.3s ease-in-out',
            height: 100,
            width: 100,

          }}
        />
        <br/> 
        <button onClick={handleClick}>
          Obróć
        </button>
      </div>
    );
}

export default RotatingImage;