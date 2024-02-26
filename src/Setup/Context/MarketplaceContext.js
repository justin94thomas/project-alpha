import React, { createContext, useContext, useReducer } from 'react';
import ProductList from '../../Pages/Marketplace/Components/data.json';

const MarketplaceContext = createContext();

const initialState = {
    sneakers: ProductList.Sneakers,
    cart: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, state.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'ADD_QUANTITY':
            return { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item) }
        case 'REDUCE_QUANTITY':
            return { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item) }
        case dafault:
            return state;
    }
}


const MarketplaceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MarketplaceContext.Provider value={{ state, dispatch }}>
            {children}
        </MarketplaceContext.Provider>
    )
};

const useMarketplaceContext = () => {
    const context = useContext(MarketplaceContext);
    if (!context) {
        throw new Error('useSneakerContext must be used within a MarketplaceProvider');
    }
    return context;
}

export { MarketplaceProvider, useMarketplaceContext };