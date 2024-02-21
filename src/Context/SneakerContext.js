// SneakerContext.js
import React, { createContext, useContext, useReducer } from 'react';

const SneakerContext = createContext();

const initialState = {
    sneakers: [
        { id: 1, name: 'Sneaker 1', price: 50, description: 'Lorem ipsum...' },
        { id: 2, name: 'Sneaker 2', price: 70, description: 'Lorem ipsum...' },
        // Add more sneakers as needed
    ],
    cart: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
                ),
            };
        default:
            return state;
    }
};

const SneakerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SneakerContext.Provider value={{ state, dispatch }}>
            {children}
        </SneakerContext.Provider>
    );
};

const useSneakerContext = () => {
    const context = useContext(SneakerContext);
    if (!context) {
        throw new Error('useSneakerContext must be used within a SneakerProvider');
    }
    return context;
};

export { SneakerProvider, useSneakerContext };
