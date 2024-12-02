const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Serve static files (in production)
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Catch-all route for React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
