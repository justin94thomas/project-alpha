import React from 'react';
import { Grid, Box, Typography, makeStyles, withStyles } from '@material-ui/core';
import { useBlockbusterContext } from '../../../../Setup/Context/BlockbusterContext';




const useStyles = makeStyles((theme) => ({
}))

const BookTickets = () => {
    const classes = useStyles();
    const { state, dispatch } = useBlockbusterContext();

    return (
        <Grid container xs={12} className={classes.bookTicketsMain}>
            Book Tickets
        </Grid>
    )
}

export default BookTickets;