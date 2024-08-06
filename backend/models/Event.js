const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  seats: [
    {
      number: {
        type: Number,
        required: true,
      },
      isBooked: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model('Event', eventSchema);
