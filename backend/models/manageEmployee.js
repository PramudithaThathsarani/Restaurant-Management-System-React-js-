const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number']
  },
  address: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'User']
  },
  status: {
    type: String,
    required: true,
    enum: ['Active', 'Inactive']
  }
});

module.exports = mongoose.model('User', userSchema);
