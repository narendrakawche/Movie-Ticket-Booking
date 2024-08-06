import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';

function SeatSelection() {
  const { id } = useParams();
  const history = useHistory();
  const [seats, setSeats] = useState([]);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await axios.get(`/api/events/${id}`);
      setSeats(data.seats);
    };

    fetchEvent();

    socket.on('seatBooked', ({ eventId, seatNumber }) => {
      if (eventId === id) {
        setSeats(prevSeats =>
          prevSeats.map(seat =>
            seat.number === seatNumber ? { ...seat, isBooked: true } : seat
          )
        );
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const handleBookSeat = async (seatNumber) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `/api/bookings/${id}/book`,
        { seatNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Seat booked successfully');
      history.push('/payment');
    } catch (err) {
      console.error(err);
      alert('Seat booking failed');
    }
  };

  return (
    <div>
      <h1>Select Seats</h1>
      <div>
        {seats.map(seat => (
          <button
            key={seat.number}
            onClick={() => handleBookSeat(seat.number)}
            disabled={seat.isBooked}
          >
            {seat.isBooked ? 'Booked' : seat.number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeatSelection;
