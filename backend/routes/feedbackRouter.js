const express = require('express');
const Feedback = require('../models/feedback');

const router = express.Router();

// Route to handle form submission
router.post('/submit-feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Route to get all feedback submissions
router.get('/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).send(feedbacks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
