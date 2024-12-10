import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Login" element={<Login />}> </Route>
      </Routes>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Message from Backend:</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
