# Movie-Ticket-Booking
A full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed for booking tickets for events like concerts, movies, or workshops. The system handles concurrent users, seat reservations, and provides real-time updates to ensure smooth booking experiences.
### Features
- <b>_User Authentication and Registration:_</b> Secure user authentication with JWT and bcrypt for password hashing.<br>
- <B>_Event Creation and Management:_</B> Admins can create and manage events (movies, concerts, workshops) with customizable seating layouts.<br>
- <b>_Seat Allocation and Booking:_</b> Real-time seat availability and booking with concurrency control for handling multiple users.<br>
- <b>_Simulated Payment Integration:_</b> A mock payment process simulates user payments to complete the booking.<br>
- <b>_Real-time Updates:_</b> Live updates on seat booking status using Socket.io to prevent double bookings.<br>
- <b>_Concurrency Handling:_</b> Priority-based system ensuring first-come, first-served bookings.<br>
- <b>_Scalability:_</b> Capable of supporting thousands of concurrent users with MongoDB as the database.<br>
### Tech Stack
- <b>Frontend:</b> React.js<br>
- <b>Backend:</B> Node.js, Express.js<br>
- <b>Database:</B> MongoDB (Mongoose)<br>
- <b>Real-time Communication:</B> Socket.io<br>
- <b>Authentication:</b> JWT, bcrypt<br>
### Usage
- <strong>User Authentication:</strong> Register and log in to book events.
- <strong>Event Management:</strong> Create and manage events with seat layouts.
- <strong>Real-time Booking:</strong> Book seats in real time, with live updates for availability.
- <strong>Simulated Payment:</strong> Complete bookings through a simulated payment gateway.
