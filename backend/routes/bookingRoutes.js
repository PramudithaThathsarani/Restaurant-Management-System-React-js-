const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Create a new booking
router.post('/book-table', async (req, res) => {
  const { name, email, phone, date, time, guests } = req.body;

  try {
    const newBooking = new Booking({ name, email, phone, date, time, guests });
    const savedBooking = await newBooking.save();
    res.status(201).json({ success: true, booking: savedBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ success: false, message: 'Booking failed!' });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
  }
});

// Get a single booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ success: false, message: 'Booking not found' });
    }
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch booking' });
  }
});

// Update a booking by ID
router.put('/:id', async (req, res) => {
  const { name, email, phone, date, time, guests } = req.body;

  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      booking.name = name || booking.name;
      booking.email = email || booking.email;
      booking.phone = phone || booking.phone;
      booking.date = date || booking.date;
      booking.time = time || booking.time;
      booking.guests = guests || booking.guests;

      const updatedBooking = await booking.save();
      res.status(200).json({ success: true, booking: updatedBooking });
    } else {
      res.status(404).json({ success: false, message: 'Booking not found' });
    }
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ success: false, message: 'Failed to update booking' });
  }
});

// Delete a booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (booking) {
      res.status(200).json({ success: true, message: 'Booking deleted' });
    } else {
      res.status(404).json({ success: false, message: 'Booking not found' });
    }
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ success: false, message: 'Failed to delete booking' });
  }
});

module.exports = router;
