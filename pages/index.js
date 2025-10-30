import { useState } from 'react';


export default function Home() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess }),
    });

    const data = await res.json();
    setMessage(data.message);
    setGuess('');
  };

  return (
    <div className="container">
      <h1>Adivinhe o número (1-100)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Digite seu chute"
        />
        <button type="submit">Chutar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
