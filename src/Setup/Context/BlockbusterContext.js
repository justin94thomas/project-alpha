import React, { createContext, useContext, useReducer } from 'react';
import BlockbusterData from '../../Pages/Blockbuster/data.json';

const BlockbusterContext = createContext();

const initialState = {
    movies: BlockbusterData.Movies,
    selectedMovie: null,
    selectedTheater: null,
    selectedTiming: null,
    numSeats: 1,
    bookedSeats: [],
    openScreen: {
        dashboard: true,
        preview: false,
        bookings: false,
        bookTickets: false,
        watchOnline: false
    },
    seats: BlockbusterData.Seats
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_SCREEN':
            return { ...state, openScreen: action.payload };
        case 'UPDATE_SELECTED_SEAT':
            return { ...state, seats: action.payload };
        case 'SELECT_MOVIE':
            return { ...state, selectedMovie: action.payload };
        case 'SELECT_THEATER':
            return { ...state, selectedTheater: action.payload };
        case 'SELECT_TIMING':
            return { ...state, selectedTiming: action.payload };
        case 'SET_NUM_SEATS':
            return { ...state, numSeats: action.payload };
        case 'ADD_BOOKED_SEAT':
            return { ...state, bookedSeats: action.payload };
        case 'REMOVE_BOOKED_SEAT':
            return {
                ...state,
                bookedSeats: state.bookedSeats.filter(seat => seat !== action.payload)
            };
        default:
            return state;
    }
}

const BlockbusterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BlockbusterContext.Provider value={{ state, dispatch }}>
            {children}
        </BlockbusterContext.Provider>
    );
};

const useBlockbusterContext = () => {
    const context = useContext(BlockbusterContext);
    if (!context) {
        throw new Error('useBlockbusterContext must be used within a BlockbusterProvider');
    }
    return context;
}

export { BlockbusterProvider, useBlockbusterContext };