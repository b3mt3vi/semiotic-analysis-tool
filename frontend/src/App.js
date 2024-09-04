import React, { useState, useEffect } from 'react';
import TextList from './components/TextList';
import TextForm from './components/TextForm';
import SemioticSquareForm from './components/SemioticSquareForm';

function App() {
    const [texts, setTexts] = useState([]);
    const [squares, setSquares] = useState([]);

    // Fetch Texts from the backend
    const fetchTexts = async () => {
        const response = await fetch('/api/texts/');
        const data = await response.json();
        setTexts(data);
    };

    // Fetch Semiotic Squares from the backend
    const fetchSquares = async () => {
        const response = await fetch('/api/squares/');
        const data = await response.json();
        setSquares(data);
    };

    // Add new text
    const addText = async (newText) => {
        const response = await fetch('/api/texts/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newText),
        });
        if (response.ok) {
            fetchTexts(); // Re-fetch the texts after successful addition
        }
    };

    // Add new semiotic square
    const addSquare = async (newSquare) => {
        const response = await fetch('/api/squares/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSquare),
        });
        if (response.ok) {
            fetchSquares(); // Re-fetch the squares after successful addition
        }
    };

    useEffect(() => {
        fetchTexts();  // Load texts on component mount
        fetchSquares();  // Load squares on component mount
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Semiotic Analysis Tool</h1>
                
                {/* Text List */}
                <h2>Texts</h2>
                <TextList texts={texts} />
                
                {/* Form for adding new Text */}
                <h2>Add New Text</h2>
                <TextForm onAddText={addText} />
                
                {/* Semiotic Square List */}
                <h2>Semiotic Squares</h2>
                {/* You can create a component to display the squares similar to TextList */}
                
                {/* Form for adding new Semiotic Square */}
                <h2>Add New Semiotic Square</h2>
                <SemioticSquareForm onAddSquare={addSquare} />
            </header>
        </div>
    );
}

export default App;

