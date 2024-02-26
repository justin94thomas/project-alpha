// Checkout.js
import React from 'react';
import { useSneakerContext } from '../../Context/SneakerContext';

const Checkout = () => {
    const { state } = useSneakerContext();
    const totalItems = state.cart.length;

    if (totalItems === 0) {
        return null; // Hide the component if the cart is empty
    }
    debugger
    const totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Checkout</h2>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
            <button>Proceed to Pay</button>
        </div>
    );
};

export default Checkout;
