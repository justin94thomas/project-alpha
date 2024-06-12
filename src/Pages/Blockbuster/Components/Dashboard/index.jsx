import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useBlockbusterContext } from '../../../../Setup/Context/BlockbusterContext';
import '../../blockbuster.css';
import InTheaters from './inTheaters.jsx';
import MovieCardUpcomming from './upcommingCard.jsx';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        display: 'flex',
        gap: 10,
        justifyContent: 'space-around'
    },
    movieSection: {
        height: '100%',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa !important',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000 !important'
        }
    },
    upcomingMovies: {
        height: '100%',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa !important',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000 !important'
        }
    }
}))
const BlockbusterDashboard = ({ handleSelectedMovie }) => {
    const classes = useStyles();
    const [inTheaters, setInTheaters] = useState([]);
    const [upcommingMovies, setUpcommingMovies] = useState([]);
    const { state, dispatch } = useBlockbusterContext();

    useEffect(() => {
        if (state?.movies) {
            let inTheaters = state?.movies.filter(val => val.status === 'in-theaters');
            let upCommingMovies = state?.movies.filter(val => val.status === 'upcoming');
            setInTheaters(inTheaters);
            setUpcommingMovies(upCommingMovies)
        }
    }, [state])

    return (
        <Grid container xs={12} className={classes.mainBody}>
            <Grid item xs={8} className={classes.movieSection}>
                <InTheaters movieData={inTheaters} handleSelectedMovie={handleSelectedMovie} />
            </Grid>
            <Grid item xs={3} className={classes.upcomingMovies}>
                <MovieCardUpcomming movieData={upcommingMovies} handleSelectedMovie={handleSelectedMovie} />
            </Grid>
        </Grid>
    )
}

export default BlockbusterDashboard;