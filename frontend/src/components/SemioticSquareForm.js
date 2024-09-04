import React, { useState } from 'react';

const SemioticSquareForm = ({ onAddSquare }) => {
    const [term1, setTerm1] = useState('');
    const [term2, setTerm2] = useState('');
    const [term3, setTerm3] = useState('');
    const [term4, setTerm4] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSquare = { term1, term2, term3, term4 };
        onAddSquare(newSquare);
        setTerm1('');
        setTerm2('');
        setTerm3('');
        setTerm4('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Term 1:</label>
                <input type="text" value={term1} onChange={(e) => setTerm1(e.target.value)} required />
            </div>
            <div>
                <label>Term 2:</label>
                <input type="text" value={term2} onChange={(e) => setTerm2(e.target.value)} required />
            </div>
            <div>
                <label>Term 3:</label>
                <input type="text" value={term3} onChange={(e) => setTerm3(e.target.value)} required />
            </div>
            <div>
                <label>Term 4:</label>
                <input type="text" value={term4} onChange={(e) => setTerm4(e.target.value)} required />
            </div>
            <button type="submit">Add Semiotic Square</button>
        </form>
    );
};

export default SemioticSquareForm;

