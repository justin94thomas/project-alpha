import { Button, Dialog, DialogActions, DialogContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { icons, images } from '../../../../Setup/Content/assets';
import { useBlockbusterContext } from '../../../../Setup/Context/BlockbusterContext';

const useStyles = makeStyles((theme) => ({
    seatMain: {
        marginTop: 5,
        background: '#000 !important',
        height: '75vh',
        display: 'table',
        textAlign: '-webkit-center',
        padding: '35px',
        paddingBottom: 10
    },
    seatMap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    seatRow: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px',
        width: '90%',
        justifyContent: 'space-evenly'
    },
    seat: {
        width: '20px',
        height: '20px',
        border: '1px solid #ccc',
        margin: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    selected: {
        color: 'green',
        // transform: 'rotate(180deg)'
    },
    free: {
        color: '#fff',
        // transform: 'rotate(180deg)'
    },
    disabled: {
        color: '#000'
    },
    movieScreen: {
        width: '300px',
        height: '10px',
        background: '#fff !important'
    },
    speakerICO: {
        color: '#fff',
        fontSize: 55
    },
    screenMain: {
        marginBottom: '7vh',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    screenMain2: {
        marginTop: '2vh',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}))

function SeatICO({ id, selected, onSelect }) {
    const classes = useStyles();
    const { Seat } = icons;
    return (
        <>
            <Seat
                className={classes.seat && selected ? classes.selected : classes.free}
                size={20}
                onClick={() => onSelect(id)} />
            <Typography style={{ color: '#fff', fontSize: 12 }}>{id}</Typography>
        </>
    );
}
function SeatSelector({ ticketsConfirmed }) {
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const totalRows = 10;
    const seatsPerRow = 15;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { Speaker } = icons;
    const { movieTicket } = images;
    const { state, dispatch } = useBlockbusterContext();
    const [dialogOpen, setDialogOpen] = useState(false);


    const selectSeat = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat.seats !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };
    const isSeatSelected = (seatId) => {
        return selectedSeats.includes(seatId);
    };

    const confirmSeats = () => {
        let bookedSeats = {
            movie: state.selectedMovie.title,
            image: state.selectedMovie.image,
            theater: state.selectedTheater,
            time: state.selectedTiming,
            seats: selectedSeats
        }
        dispatch({ type: 'ADD_BOOKED_SEAT', payload: [...state.bookedSeats, bookedSeats] });
        enqueueSnackbar('Tickets Booked!', { variant: 'success' });
        handleClose();
        setTimeout(() => {
            ticketsConfirmed();
        }, 2000);
    }

    const handleClose = () => {
        setDialogOpen(false);
    }
    const handleOpen = () => {
        setDialogOpen(true)
    }

    return (
        <Grid container lg={12} className={classes.seatMain}>
            <Grid container className={classes.screenMain}>
                <Speaker className={classes.speakerICO} />
                <span className={classes.movieScreen} />
                <Speaker className={classes.speakerICO} />
            </Grid>
            <Grid container className={classes.seatRow}>
                {Array.from({ length: totalRows }, (_, rowIndex) => (
                    <Grid item key={`row-${rowIndex}`} className={classes.seatRow}>
                        {Array.from({ length: seatsPerRow }, (_, seatIndex) => {
                            const seatId = String.fromCharCode(65 + rowIndex) + (seatIndex + 1);
                            return (
                                <SeatICO
                                    key={seatId}
                                    id={seatId}
                                    selected={isSeatSelected(seatId)}
                                    onSelect={selectSeat}
                                />
                            );
                        })}
                    </Grid>
                ))}
            </Grid>
            <Grid container className={classes.screenMain2}>
                <Button variant="contained" color="secondary" style={{ textTransform: 'capitalize' }} onClick={handleOpen} >
                    Confirm Seats
                </Button>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={dialogOpen}>
                <DialogContent dividers>
                    <Grid container style={{ marginTop: 40, textAlign: '-webkit-center' }}>
                        <Grid item lg={12}>
                            <Typography>Confirm Tickets</Typography>
                            <img src={movieTicket} alt={"movie-ticket"} width={200} />
                            <Typography>{selectedSeats.join(', ')}</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Button variant="contained" color="secondary" style={{ textTransform: 'capitalize' }} onClick={confirmSeats} >
                        Confirm Ticket
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default SeatSelector;
