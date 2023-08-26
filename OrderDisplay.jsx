import React from 'react';
import { useSelector } from 'react-redux';

const OrderDisplay = () => {
  const order = useSelector((state) => state.order);

  return (
    <div>
      <h2>Order Details</h2>
      <p>Product: {order.product}</p>
      <p>Quantity: {order.quantity}</p>
    </div>
  );
};

export default OrderDisplay;
