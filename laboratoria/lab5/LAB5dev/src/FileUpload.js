import React, { useState, useRef } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const uploadFile = () => {
    if (selectedFile) {
      alert(`"Przesyłanie" pliku: ${selectedFile.name}`);
    } else {
      alert('Proszę najpierw wybrać plik!');
    }
  };

  const onBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileChange} 
        style={{ display: 'none' }}
        ref={fileInputRef}
      />

      <button onClick={onBrowseClick} type="button" className="browse-button">
        Przeglądaj...
      </button>

      <button onClick={uploadFile} style={{ marginLeft: '10px' }}>
        "Prześlij" plik
      </button>
      
      <p className="file-upload-status">
        {selectedFile ? `Wybrano: ${selectedFile.name}` : 'Nie wybrano pliku.'}
      </p>
    </div>
  );
}

export default FileUpload;