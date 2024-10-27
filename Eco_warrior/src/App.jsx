// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
