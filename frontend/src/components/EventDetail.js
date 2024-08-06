import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EventDetail() {
  const { id } = useParams();
  const history = useHistory();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await axios.get(`/api/events/${id}`);
      setEvent(data);
    };

    fetchEvent();
  }, [id]);

  const handleSelectSeats = () => {
    history.push(`/seat-selection/${id}`);
  };

  return (
    <div>
      {event && (
        <>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <button onClick={handleSelectSeats}>Select Seats</button>
        </>
      )}
    </div>
  );
}

export default EventDetail;
