import { Box, Button, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { images } from '../../../../Setup/Content/assets';
import { useBlockbusterContext } from '../../../../Setup/Context/BlockbusterContext';

const useStyles = makeStyles((theme) => ({
    cartCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '12px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000'
        }
    },
    cartItem: {
        border: '1px solid #eee',
        borderRadius: '8px',
        textAlign: 'left',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column'
    },
    productDetail: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    },
    productDetail2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    myCartText: {
        fontWeight: 600,
        fontSize: '20px'
    },
    noCartImg: {
        width: '500px',
        alignSelf: 'center'
    },
    buttonStyle: {
        textTransform: 'capitalize',
        width: 140,
        float: 'right'
    }
}))


const BookedTickets = () => {
    const classes = useStyles();
    const { state, dispatch } = useBlockbusterContext();

    const backToMovie = () => {
        const updatedOpenScreen = Object.fromEntries(
            Object.entries(state.openScreen).map(([key, _]) => [key, false])
        );
        dispatch({ type: 'UPDATE_CURRENT_SCREEN', payload: { ...updatedOpenScreen, dashboard: true } });
    }

    return <>
        <Grid container xs={12} style={{ padding: 20 }}>
            <Grid item xs={6} className={classes.cartCard}>
                <Typography varient='p' className={classes.myCartText}>My Bookings</Typography>
                {state?.bookedSeats.length > 0 ? state?.bookedSeats.map((cartItem, index) => {
                    return <Box key={cartItem.id} className={classes.cartItem}>
                        <Grid container xs={12}>
                            <Grid item xs={8}>
                                <Grid container xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Grid item xs={3} className={classes.productDetail}>
                                        <img style={{ height: '150px', padding: '10px 0px 10px 10px' }} alt={"cart-img"} src={cartItem?.image} />
                                    </Grid>
                                    <Grid item xs={9} style={{ padding: '5px 12px' }}>
                                        <Typography varient='p' style={{ fontWeight: 600, fontSize: '18px' }}>{cartItem?.movie}</Typography>
                                        <Typography varient="p">{cartItem.theater}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} className={classes.productDetail2}>
                                <Typography varient="p" style={{ fontSize: '13px', color: '#a4a4a4' }}>Seats</Typography>
                                <Typography varient="p">{cartItem.seats.join(', ')}</Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.productDetail2}>
                                <Typography style={{ fontSize: '13px', color: '#a4a4a4' }}>Time</Typography>
                                <Typography style={{ fontSize: "15px" }}>{cartItem.time}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                }) : <>
                    <img src={images.emptyCart} alt={"empty-cart"} className={classes.noCartImg} />
                    <Typography>No Bookings Found</Typography>
                </>
                }
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="secondary" className={classes.buttonStyle} onClick={backToMovie} >
                    Back to Movies
                </Button>
            </Grid>
        </Grid>
    </>
}

export default BookedTickets;