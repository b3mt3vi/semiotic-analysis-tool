import React, { useState } from 'react';
import TextForm from './components/TextForm';
import SemioticSquare from './components/SemioticSquare';

function App() {
  const [text, setText] = useState('');  // State for the entered text
  const [squareData, setSquareData] = useState(null);  // Semiotic square data
  
  // Handle text submission
  const handleTextSubmit = (submittedText) => {
    setText(submittedText);
    // Here you can add logic to process text and generate squareData
    setSquareData({
      opposition1_term1: 'Subject',
      opposition1_term2: 'Object',
      opposition2_term1: 'Freedom',
      opposition2_term2: 'Confinement',
      neutral_term: 'Action'
    });
  };

  return (
    <div className="App">
      <h1>Semiotic Analysis Tool</h1>
      <TextForm onSubmit={handleTextSubmit} />
      {squareData && <SemioticSquare data={squareData} />}
    </div>
  );
}

export default App;
