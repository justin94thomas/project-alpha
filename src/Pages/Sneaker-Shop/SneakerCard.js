// SneakerCard.js
import React from 'react';
import { useSneakerContext } from '../../Context/SneakerContext';

const SneakerCard = ({ sneaker }) => {
    const { state, dispatch } = useSneakerContext();
    const isInCart = state.cart.some(item => item.id === sneaker.id);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...sneaker, quantity: 1 } });
    };

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: sneaker.id });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: sneaker.id });
    };

    const handleRemoveFromCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: sneaker.id });
    };

    return (
        <div>
            <h3>{sneaker.name}</h3>
            <p>{sneaker.description}</p>
            <p>${sneaker.price}</p>
            {isInCart ? (
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <span>{state.cart.find(item => item.id === sneaker.id).quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleRemoveFromCart}>Remove from Cart</button>
                </div>
            ) : (
                <button onClick={handleAddToCart}>Add to Cart</button>
            )}
        </div>
    );
};

export default SneakerCard;
