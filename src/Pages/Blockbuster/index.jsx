import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles, withStyles, Tabs, Tab } from '@material-ui/core';
import './blockbuster.css';
import { images, icons } from '../../Setup/Content/assets';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import BlockbusterDashboard from './Components/Dashboard';
import BlockbusterPreview from './Components/Dashboard/preview';
import WatchOnline from './Components/Watch-Online';

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
    const { state, dispatch } = ''; // useMarketplaceContext();

    return (
        <Grid container xs={12}>
            <Grid item xs={11}>
                <img src={images.blockbusterLogo} className={classes.blockbusterLogo} onClick={handleNavigateDashboard} />
            </Grid>
            <Grid item xs={1} className={classes.profile}>
                <Box className={classes.navBackground}>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <BookingsIcon size={20} style={{ cursor: 'pointer' }} onClick={handleMyBookings} />
                        {state?.bookings.length > 0 ? <span className={classes.addedToCart}>{state?.bookings.length}</span> : null}
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
    const [previewMovie, setPreviewMovie] = useState({});

    const [openScreen, setOpenScreen] = useState({
        dashboard: true,
        preview: false,
        bookings: false,
        seatSelection: false,
        watchOnline: false
    })

    const handleNavigateDashboard = () => {
        setOpenScreen({
            dashboard: true,
            preview: false,
            bookings: false,
            seatSelection: false,
            watchOnline: false
        })
    }
    const handleMyBookings = () => { }

    const handleSelectedMovie = (movie) => {
        setPreviewMovie(movie);
        setOpenScreen({
            dashboard: false,
            preview: true,
            bookings: false,
            seatSelection: false,
            watchOnline: false
        })
    }
    const watchOnline = (movie) => {
        setPreviewMovie(movie);
        setOpenScreen({
            dashboard: false,
            preview: false,
            bookings: false,
            seatSelection: false,
            watchOnline: true
        })
    }
    const closePreview = () => {
        setOpenScreen({
            dashboard: false,
            preview: true,
            bookings: false,
            seatSelection: false,
            watchOnline: false
        })
    }
    return (
        <div className="blockbuster-main">
            <Grid container xs={12} className={classes.main}>
                <Grid item xs={12} className={classes.mainHeader}>
                    <Header handleNavigateDashboard={handleNavigateDashboard} handleMyBookings={handleMyBookings} />
                </Grid>
                {openScreen.dashboard && <BlockbusterDashboard handleSelectedMovie={handleSelectedMovie} />}
                {openScreen.preview && <BlockbusterPreview previewMovie={previewMovie} watchOnline={watchOnline} />}
                {openScreen.watchOnline && <WatchOnline previewMovie={previewMovie} closePreview={closePreview} />}
            </Grid>
        </div>
    )
}

export default Blockbuster;