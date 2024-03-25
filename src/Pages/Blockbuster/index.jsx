import React, { useState } from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { FaUserCircle } from "react-icons/fa";
import { BlockbusterProvider, useBlockbusterContext } from '../../Setup/Context/BlockbusterContext';
import BlockbusterDashboard from './Components/Dashboard';
import BlockbusterPreview from './Components/Dashboard/preview';
import WatchOnline from './Components/Watch-Online';
import BookTickets from './Components/Book-Tickets';
import { images, icons } from '../../Setup/Content/assets';
import './blockbuster.css';

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

const Header = ({ handleNavigateDashboard, handleMyBookings }) => {
    const classes = useStyles();
    const { BookingsIcon } = icons;
    const { state } = useBlockbusterContext();

    return (
        <Grid container className={classes.mainHeader}>
            <Grid item xs={11}>
                <img src={images.blockbusterLogo} className={classes.blockbusterLogo} onClick={handleNavigateDashboard} alt="Blockbuster Logo" />
            </Grid>
            <Grid item xs={1} className={classes.profile}>
                <Box className={classes.navBackground}>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <BookingsIcon size={20} style={{ cursor: 'pointer' }} onClick={handleMyBookings} />
                        {state?.bookedSeats?.length > 0 ? <span className={classes.addedToCart}>{state?.bookedSeats?.length}</span> : null}
                    </div>
                </Box>
                <Box className={classes.navBackground}>
                    <FaUserCircle size={20} />
                </Box>
            </Grid>
        </Grid>
    )
}

const Blockbuster = () => {
    const classes = useStyles();
    const { state, dispatch } = useBlockbusterContext();
    const [openScreen, setOpenScreen] = useState({
        dashboard: true,
        preview: false,
        bookings: false,
        bookTickets: false,
        watchOnline: false
    });

    const handleNavigateDashboard = () => {
        setOpenScreen({
            dashboard: true,
            preview: false,
            bookings: false,
            bookTickets: false,
            watchOnline: false
        })
    };

    const handleMyBookings = () => { };

    const handleBookTickets = (movie) => {
        dispatch({ type: 'SELECT_MOVIE', payload: { ...movie } });
        setOpenScreen({
            dashboard: false,
            preview: false,
            bookings: false,
            bookTickets: true,
            watchOnline: false
        })
    };

    const handleSelectedMovie = (movie) => {
        dispatch({ type: 'SELECT_MOVIE', payload: { ...movie } });
        setOpenScreen({
            dashboard: false,
            preview: true,
            bookings: false,
            bookTickets: false,
            watchOnline: false
        })
    };

    const watchOnlineMovie = (movie) => {
        dispatch({ type: 'SELECT_MOVIE', payload: { ...movie } });
        setOpenScreen({
            dashboard: false,
            preview: false,
            bookings: false,
            bookTickets: false,
            watchOnline: true
        })
    };

    const closePreview = () => {
        setOpenScreen({
            dashboard: true,
            preview: false,
            bookings: false,
            bookTickets: false,
            watchOnline: false
        })
    };

    return (
        <div className="blockbuster-main">
            <BlockbusterProvider>
                <Grid container className={classes.main}>
                    <Grid item xs={12} className={classes.mainHeader}>
                        <Header handleNavigateDashboard={handleNavigateDashboard} handleMyBookings={handleMyBookings} />
                    </Grid>
                    {openScreen.dashboard && <BlockbusterDashboard handleSelectedMovie={handleSelectedMovie} />}
                    {openScreen.preview && <BlockbusterPreview watchOnline={watchOnlineMovie} handleBookTickets={handleBookTickets} />}
                    {openScreen.watchOnline && <WatchOnline closePreview={closePreview} />}
                    {openScreen.bookTickets && <BookTickets />}
                </Grid>
            </BlockbusterProvider>
        </div>
    )
}

export default Blockbuster;
