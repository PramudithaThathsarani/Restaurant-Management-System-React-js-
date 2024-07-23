const express = require('express');
const router = express.Router();
const User = require('../models/manageEmployee'); // Ensure the path is correct

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an existing user
router.put('/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
