import React, { useEffect, useState } from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { FaUserCircle } from "react-icons/fa";
import { BlockbusterProvider, useBlockbusterContext } from '../../Setup/Context/BlockbusterContext';
import BlockbusterDashboard from './Components/Dashboard';
import BlockbusterPreview from './Components/Dashboard/preview';
import WatchOnline from './Components/Watch-Online';
import BookTickets from './Components/Book-Tickets';
import { images, icons } from '../../Setup/Content/assets';
import './blockbuster.css';
import BookedTickets from './Components/Bookings';

const useStyles = makeStyles((theme) => ({
    mainHeader: {
        background: '#000',
        borderBottom: '5px solid #FFD700',
        maxHeight: '10%'
    },
    blockbusterLogo: {
        width: 160,
        padding: 8,
        float: 'left',
        cursor: 'pointer'
    },
    profile: {
        padding: 10,
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    },
    navBackground: {
        padding: '10px',
        background: '#eee',
        borderRadius: '50%',
        height: '41px',
        lineHeight: '10px',
        overflow: 'hidden'
    },
    addedToCart: {
        borderRadius: '50%',
        width: 16,
        border: '1px solid',
        lineHeight: '15px',
        background: 'red',
        color: '#fff',
        position: 'absolute',
        top: '-11px',
        right: '-5px',
        fontSize: '10px'
    },
}))

const Header = () => {
    const classes = useStyles();
    const { BookingsIcon } = icons;
    const { state, dispatch } = useBlockbusterContext();

    const handleNavigateDashboard = () => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, dashboard: true } });
    };

    const handleMyBookings = () => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, bookings: true } });
    };

    return (
        <Grid container>
            <Grid item lg={11}>
                <img src={images.blockbusterLogo} className={classes.blockbusterLogo} onClick={() => handleNavigateDashboard()} alt="Blockbuster Logo" />
            </Grid>
            <Grid item lg={1} className={classes.profile}>
                <Box className={classes.navBackground}>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <BookingsIcon id="bookings-icon" size={20} style={{ cursor: 'pointer' }} onClick={handleMyBookings} />
                        {state?.bookedSeats?.length > 0 ? <span className={classes.addedToCart}>{state?.bookedSeats?.length}</span> : null}
                    </div>
                </Box>
            </Grid>
        </Grid>
    )
}

const Blockbuster = () => {
    const { state, dispatch } = useBlockbusterContext();

    const handleBookTickets = (movie) => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'SELECT_MOVIE', payload: { ...movie } });
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, bookTickets: true } });
    };

    const handleSelectedMovie = (movie) => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'SELECT_MOVIE', payload: { ...movie } });
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, preview: true } });
    }

    const watchOnlineMovie = (movie) => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'SELECT_MOVIE', payload: { ...movie } });
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, watchOnline: true } });
    };

    const closePreview = () => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, dashboard: true } });
    };


    return (
        <>
            {state?.openScreen?.dashboard && <BlockbusterDashboard handleSelectedMovie={handleSelectedMovie} />}
            {state?.openScreen?.preview && <BlockbusterPreview watchOnline={watchOnlineMovie} handleBookTickets={handleBookTickets} />}
            {state?.openScreen?.watchOnline && <WatchOnline closePreview={closePreview} />}
            {state?.openScreen?.bookTickets && <BookTickets ticketsConfirmed={closePreview} />}
            {state?.openScreen?.bookings && <BookedTickets />}
        </>
    )
}

const BlockbusterMain = () => {
    const classes = useStyles();

    return (
        <div className="blockbuster-main">
            <BlockbusterProvider>
                <Grid container className={classes.main}>
                    <Grid item xs={12} className={classes.mainHeader}>
                        <Header />
                    </Grid>
                    <Blockbuster />
                </Grid>
            </BlockbusterProvider>
        </div>
    )
}

export default BlockbusterMain;
