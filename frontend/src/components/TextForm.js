import React, { useState } from 'react';

function TextForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for analysis"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
        Analyze
      </button>
    </form>
  );
}

export default TextForm;
