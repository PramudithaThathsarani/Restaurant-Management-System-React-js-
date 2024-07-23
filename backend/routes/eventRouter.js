const express = require('express');
const upload = require('../confic/multerConfig'); // Corrected the path to multerConfig
const Event = require('../models/event');

const router = express.Router();

// Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch a single event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new event
router.post('/', upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file.path; // This will give you the path of the uploaded file

  try {
    const newEvent = new Event({ name, description, price, image });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an existing event
router.put('/:id', upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.path : req.body.image; // Use uploaded file if available

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
