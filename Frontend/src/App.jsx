import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from the backend server
    fetch('http://localhost:3000/api/message') // Adjust the URL if needed
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Message from Backend:</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
