import React, { useState } from 'react';

function StyleChanger() {
  const [boxStyle, setBoxStyle] = useState({
    backgroundColor: '#007bff',
    padding: '20px',
    color: 'white',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  });

  const changeStyle = () => {
    setBoxStyle((prevStyle) => ({
      ...prevStyle, 
      backgroundColor: prevStyle.backgroundColor === '#007bff' ? '#dc3545' : '#007bff',
      padding: `${Math.floor(Math.random() * 20) + 10}px`, 
    }));
  };

  return (
    <div>
      <div style={boxStyle}>
        Ten boks zmienia styl!
      </div>
      <button onClick={changeStyle} style={{ marginTop: '10px' }}>
        Zmień styl
      </button>
    </div>
  );
}

export default StyleChanger;