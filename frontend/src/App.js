import React from 'react';
import TextList from './components/TextList';
import SemioticSquareList from './components/SemioticSquareList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Semiotic Analysis Tool</h1>
                <TextList />
                <SemioticSquareList />
            </header>
        </div>
    );
}

export default App;

