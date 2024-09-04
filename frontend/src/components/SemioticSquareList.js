import React, { useState, useEffect } from 'react';

function SemioticSquareList() {
    const [squares, setSquares] = useState([]);
    const [title, setTitle] = useState('');
    const [opposition1, setOpposition1] = useState('');
    const [opposition2, setOpposition2] = useState('');
    const [neutral, setNeutral] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/squares/')
            .then(response => response.json())
            .then(data => setSquares(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSquare = { title, opposition_1: opposition1, opposition_2: opposition2, neutral };

        fetch('http://127.0.0.1:8000/api/squares/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSquare),
        })
            .then(response => response.json())
            .then(data => {
                setSquares([...squares, data]);  // Add the new square to the list
                setTitle('');  // Clear the form
                setOpposition1('');
                setOpposition2('');
                setNeutral('');
            })
            .catch(error => console.error('Error adding square:', error));
    };

    return (
        <div>
            <h2>Semiotic Squares</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Opposition 1:
                    <input
                        type="text"
                        value={opposition1}
                        onChange={(e) => setOpposition1(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Opposition 2:
                    <input
                        type="text"
                        value={opposition2}
                        onChange={(e) => setOpposition2(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Neutral Term:
                    <input
                        type="text"
                        value={neutral}
                        onChange={(e) => setNeutral(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Square</button>
            </form>

            {squares.length > 0 ? (
                <ul>
                    {squares.map(square => (
                        <li key={square.id}>
                            <h3>{square.title}</h3>
                            <p>{square.opposition_1} vs {square.opposition_2}</p>
                            <p>Neutral: {square.neutral}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No semiotic squares found</p>
            )}
        </div>
    );
}

export default SemioticSquareList;

