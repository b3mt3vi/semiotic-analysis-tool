import React, { useState } from 'react';

function TextForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);  // Send text to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text for Analysis:
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button type="submit">Analyze</button>
    </form>
  );
}

export default TextForm;
