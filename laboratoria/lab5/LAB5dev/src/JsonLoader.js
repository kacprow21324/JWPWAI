import React, { useState } from 'react';

function JsonLoader() {
  const [jsonData, setJsonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadDataFromJson = () => {
    setIsLoading(true);
    setJsonData(null); 
    
    fetch('/test-data.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Błąd podczas ładowania danych:', error);
        setIsLoading(false);
        setJsonData({ error: 'Nie udało się załadować danych' });
      });
  };

  return (
    <div>
      <button onClick={loadDataFromJson} disabled={isLoading}>
        {isLoading ? 'Ładowanie...' : 'Załaduj dane z JSON'}
      </button>
      
      {jsonData && (
        <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', marginTop: '10px', textAlign: 'left' }}>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default JsonLoader;