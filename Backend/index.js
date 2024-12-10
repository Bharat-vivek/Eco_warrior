// Import required modules
const express = require('express'); // Optional if using Express
const mongoose = require('mongoose');

// Initialize the app (if using Express)
const app = express();
const PORT = 3000;

// MongoDB Connection String
const MONGO_URI = 'mongodb+srv://bharatvermar14:<Bharat@1>@cluster0.zkye5di.mongodb.net/'; // Replace with your connection string

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Example of a Mongoose Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Optional: Example Route (if using Express)
app.get('/', (req, res) => {
    res.send('Hello, MongoDB!');
});

// Start the server (if using Express)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
