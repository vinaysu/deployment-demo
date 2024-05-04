const mongoose = require('mongoose');

// Define the schema for storing values
const valueSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Value = mongoose.model('Value', valueSchema);

module.exports = Value;
