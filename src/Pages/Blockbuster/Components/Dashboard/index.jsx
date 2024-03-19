import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, makeStyles, withStyles, Tabs, Tab } from '@material-ui/core';
import '../../blockbuster.css';
import InTheaters from './inTheaters.jsx';
import MovieData from '../../data.json';
import MovieCardUpcomming from './upcommingCard.jsx';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        display: 'flex',
        gap: 10,
        padding: 10,
        justifyContent: 'space-around'
    },
    movieSection: {
        height: '100%',
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
    upcomingMovies: {
        height: '100%',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000'
        }
    }
}))
const BlockbusterDashboard = () => {
    const classes = useStyles();
    const [inTheaters, setInTheaters] = useState([]);
    const [upcommingMovies, setUpcommingMovies] = useState([]);


    useEffect(() => {
        if (MovieData.Movies) {
            let inTheaters = MovieData?.Movies.filter(val => val.status === 'in-theaters');
            let upCommingMovies = MovieData?.Movies.filter(val => val.status === 'upcoming');
            setInTheaters(inTheaters);
            setUpcommingMovies(upCommingMovies)
        }
    }, [MovieData])


    return (
        <Grid container xs={12} className={classes.mainBody}>
            <Grid item xs={8} className={classes.movieSection}>
                <InTheaters movieData={inTheaters} />
            </Grid>
            <Grid item xs={3} className={classes.upcomingMovies}>
                <MovieCardUpcomming movieData={upcommingMovies} />
            </Grid>
        </Grid>
    )
}

export default BlockbusterDashboard;