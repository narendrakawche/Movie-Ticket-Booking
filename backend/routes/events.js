const express = require('express');
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new event
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, date, seats } = req.body;

  try {
    const event = await Event.create({ title, description, date, seats });
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: 'Event creation failed' });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(400).json({ message: 'Failed to fetch events' });
  }
});

module.exports = router;
