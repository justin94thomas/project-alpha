import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, makeStyles, withStyles, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { useBlockbusterContext } from '../../../../Setup/Context/BlockbusterContext';
import { images, icons } from '../../../../Setup/Content/assets';

const useStyles = makeStyles((theme) => ({
    seatMain: {
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        cursor: 'pointer'
    },
    seatSelect: {
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        '&:hover': {
            color: '#fff',
            background: '#f84464',
        }
    },
    activeSeat: {
        color: '#fff',
        background: '#f84464',
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    movieHeaders: {
        width: '100%',
        textAlign: '-webkit-left',
        padding: 20,
        paddingBottom: 5
    },
    movieTitle: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '36px',
        fontWeight: 500,
        color: '#333'
    },
    genre: {
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '2px 5px',
        marginRight: '5px'
    },
    timingBox: {
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '8px 5px',
        marginRight: '20px',
        cursor: 'pointer'
    },
    runTime: {
        marginTop: 10
    },
    runTime1: {
        marginRight: 5
    },
    theaterMain: {
        textAlign: 'left',
        padding: 30,
        borderBottom: '1px solid #ccc'
    },
    theatersTitle: {
        fontWeight: 600
    }
}))

const BookTickets = () => {
    const classes = useStyles();
    const { RatingsStarIcon, VideoRuntime, AccountCircleIcon } = icons;
    const { state, dispatch } = useBlockbusterContext();
    const [selectedSeats, setSelectedSeats] = useState(state.seats);
    const [selectedMovie, setSelectedMovie] = useState(state.selectedMovie);
    const [activeSeat, setActiveSeat] = useState();
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleHoveredSelection = (hover) => {
        setActiveSeat(hover);
    }

    const handleSelectedQty = (selected, index) => {
        var updatedData = state?.seats.map(item => {
            if (item?.id !== selected?.id) {
                item.active = false;
            } else {
                item.active = true;
            }
            return item
        });
        dispatch({ type: 'SET_NUM_SEATS', payload: selected.value });
        dispatch({ type: 'UPDATE_SELECTED_SEAT', payload: updatedData });
    };

    useEffect(() => {
        if (selectedSeats) {
            let hover = selectedSeats.filter(item => item.active)[0];
            setActiveSeat(hover);
        }
    }, [selectedSeats])

    const handleClose = () => {
        setDialogOpen(false)
    }
    const handleOpen = () => {
        setDialogOpen(true)
    }
    const handleSelectTimings = (theater, time) => {
        dispatch({ type: 'SELECT_THEATER', payload: theater.name });
        dispatch({ type: 'SELECT_TIMING', payload: time });
        handleOpen(true);
    }

    return (
        <Grid container xs={12} className={classes.bookTicketsMain} justifyContent='center'>
            <Grid item xs={12} className={classes.movieHeaders}>
                <Grid container lg={12} style={{ borderBottom: '1px solid #ccc', padding: 10 }}>
                    <Grid item style={{ marginLeft: 10 }}>
                        <img src={selectedMovie.image} width={100} />
                    </Grid>
                    <Grid item style={{ marginLeft: 30 }}>
                        <Typography className={classes.movieTitle}>{selectedMovie.title}</Typography>
                        {selectedMovie.genre.map(item => <span className={classes.genre}>{item}</span>)}
                        <Typography varient='h1' className={classes.runTime}><VideoRuntime className={classes.runTime1} />{selectedMovie.runTime}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} justifyContent='center' style={{ marginTop: 5, background: '#ccc', height: '50vh' }}>
                <Grid item xs={10} style={{ background: '#fff', height: '88%', margin: 20 }}>
                    {selectedMovie.theaters.map(item => {
                        return <Grid container xs={12} className={classes.theaterMain}>
                            <Grid item xs={4} style={{ overflow: 'hidden', width: '100%' }}>
                                <Typography className={classes.theatersTitle}>{item.name}</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                {item.timings.map(timings => <span className={classes.timingBox} onClick={() => handleSelectTimings(item, timings)} style={{ color: 'green' }}>{timings}</span>)}
                            </Grid>
                        </Grid>
                    })}
                </Grid>
            </Grid>

            {/* Seat Quantity Selection */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={dialogOpen}>
                <DialogContent dividers>
                    <Grid container style={{ marginTop: 40, textAlign: '-webkit-center' }}>
                        <Grid item xs={12}>
                            <Typography>How many seats?</Typography>
                            <img src={activeSeat?.img} width={200} />
                        </Grid>
                        <Grid item xs={12}>
                            <ul className={classes.seatMain}>
                                {selectedSeats.length > 0 && selectedSeats.map((select, index) => {
                                    return <>
                                        <li variant="contained" color="secondary" key={index}
                                            onMouseOver={() => handleHoveredSelection(select)}
                                            onClick={() => handleSelectedQty(select, index)}
                                            className={select.active ? classes.activeSeat : classes.seatSelect}>{select.value}
                                        </li>
                                    </>
                                })}
                            </ul>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" color="secondary" onClick={handleClose} >
                        Select Seats
                    </Button>
                </DialogActions>

            </Dialog>

        </Grid>
    )
}

export default BookTickets;