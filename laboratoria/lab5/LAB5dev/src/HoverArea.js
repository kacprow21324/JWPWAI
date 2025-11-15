import React, { useState } from 'react';

function HoverArea() {
  const [hoverText, setHoverText] = useState('Najedź na mnie');

  const handleMouseOver = () => {
    setHoverText('Dzięki, że najechałeś!');
  };

  const handleMouseOut = () => {
    setHoverText('Najedź na mnie');
  };

  return (
    <div 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      style={{ padding: '10px', border: '1px solid gray', cursor: 'pointer' }}
    >
      {hoverText}
    </div>
  );
}

export default HoverArea;