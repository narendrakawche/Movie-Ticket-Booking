const express = require('express');
const Booking = require('../models/Booking');
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Book a seat for an event
router.post('/:eventId/book', authMiddleware, async (req, res) => {
  const { eventId } = req.params;
  const { seatNumber } = req.body;
  const io = req.app.get('socketio');

  try {
    const event = await Event.findById(eventId);

    if (event.seats.find(seat => seat.number === seatNumber).isBooked) {
      return res.status(400).json({ message: 'Seat already booked' });
    }

    event.seats = event.seats.map(seat =>
      seat.number === seatNumber ? { ...seat, isBooked: true } : seat
    );

    await event.save();

    const booking = await Booking.create({
      user: req.user._id,
      event: eventId,
      seatNumber,
    });

    io.emit('seatBooked', { eventId, seatNumber });

    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: 'Booking failed' });
  }
});

module.exports = router;
