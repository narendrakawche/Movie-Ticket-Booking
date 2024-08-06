import React from 'react';

function Payment() {
  const handlePayment = () => {
    alert('Payment simulated. Booking complete!');
  };

  return (
    <div>
      <h1>Payment</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
