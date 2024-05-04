const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Value = require('./model'); // Import the Value model

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://vinay:vinay.s@vinay.leowher.mongodb.net/?retryWrites=true&w=majority&appName=vinay';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Route to handle storing a new value
app.post('/api/values', (req, res) => {
    const { value } = req.body;

    // Create a new Value document
    const newValue = new Value({
        value
    });

    // Save the document to MongoDB
    newValue.save()
        .then(savedValue => {
            console.log('Value saved successfully:', savedValue);
            res.status(201).json(savedValue);
        })
        .catch(error => {
            console.error('Error saving value:', error);
            res.status(500).json({ error: 'Error saving value' });
        });
});

// Route to retrieve all values
app.get('/api/values', (req, res) => {
    // Retrieve all values from the database
    Value.find()
        .then(values => {
            console.log('All values:', values);
            res.status(200).json(values);
        })
        .catch(error => {
            console.error('Error retrieving values:', error);
            res.status(500).json({ error: 'Error retrieving values' });
        });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
