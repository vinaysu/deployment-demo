const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://vinay:vinay.s@vinay.leowher.mongodb.net/?retryWrites=true&w=majority&appName=vinay'

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

