import React, { useState, useEffect } from 'react';

function TextList() {
    const [texts, setTexts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/texts/')
            .then(response => response.json())
            .then(data => setTexts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newText = { title, content };

        fetch('http://127.0.0.1:8000/api/texts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newText),
        })
            .then(response => response.json())
            .then(data => {
                setTexts([...texts, data]);  // Add the new text to the list
                setTitle('');  // Clear the form
                setContent('');  // Clear the form
            })
            .catch(error => console.error('Error adding text:', error));
    };

    return (
        <div>
            <h2>Texts</h2>
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
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Text</button>
            </form>

            {texts.length > 0 ? (
                <ul>
                    {texts.map(text => (
                        <li key={text.id}>
                            <h3>{text.title}</h3>
                            <p>{text.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No texts found</p>
            )}
        </div>
    );
}

export default TextList;

