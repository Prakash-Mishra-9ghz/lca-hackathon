import React, { useState } from 'react';
import Form from './component/form';
import Results from './component/result';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleLCARequest = async (formData) => {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="App">
      <h1>AI-Driven LCA Tool for Metallurgy</h1>
      <Form onSubmit={handleLCARequest} />
      {result && <Results result={result} />}
    </div>
  );
}

export default App;
