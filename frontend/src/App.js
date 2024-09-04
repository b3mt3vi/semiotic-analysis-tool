import React, { useState } from 'react';
import TextForm from './components/TextForm';
import SemioticSquare from './components/SemioticSquare';

function App() {
  const [nlpData, setNlpData] = useState(null);

  const handleTextSubmit = (data) => {
    setNlpData(data);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Semiotic Analysis Tool</h1>
      <TextForm onSubmit={handleTextSubmit} />
      {nlpData && <SemioticSquare data={nlpData} />}
    </div>
  );
}

export default App;
