import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { icons } from '../../../../Setup/Content/assets';
import { useBlockbusterContext } from '../../../../Setup/Context/BlockbusterContext';
import '../../blockbuster.css';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        padding: '0px'
    },
    movieDetails1: {
        padding: 30,
        height: '60vh',
        overflow: 'hidden',
        background: 'rgb(26, 26, 26) !important',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        position: 'relative',
        margin: '0px auto',
    },
    movieImage: {
        height: '100%',
        textAlign: '-webkit-right'
    },
    image: {
        height: '100%'
    },
    movieDetails: {
        paddingLeft: 40,
        height: '100%',
        display: 'flex',
        flexDirection: 'column !important',
        justifyContent: 'space-between'
    },
    movieTitle: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 24,
        textAlign: '-webkit-left'
    },
    movieCastText: {
        fontWeight: 600,
        fontSize: 24,
        textAlign: '-webkit-left',
        width: '100%'
    },
    movieCasts: {
        fontSize: 18,
        textAlign: '-webkit-left'
    },
    movieGenre: {
        color: '#fff',
        fontSize: 16,
        textAlign: '-webkit-left'
    },
    movieRating: {
        marginTop: 10,
        color: '#fff',
        fontSize: 16,
        textAlign: '-webkit-left'
    },
    ratings: {
        marginRight: '5px',
        marginTop: '-6px',
        fill: 'red'
    },
    runTime: {
        marginRight: '5px',
        marginTop: '-2px',
    },
    movieSynopsis: {
        width: '60%',
        padding: '4px 10px',
        background: 'rgb(229, 229, 229) !important',
        marginTop: '40px',
        textAlign: '-webkit-left',
        borderRadius: '8px'
    },
    buttonsDiv: {
        display: 'flex',
        gap: 10,
        marginTop: 'auto'
    },
    movieDetails2: {
        padding: 40
    },
    castMain: {
        display: 'flex',
        gap: '3px', /* This is the default gap between items */
        flexDirection: 'column !important',
        placeItems: 'center',
        marginBottom: '20px',
        width: 170
    },
    buttonMain: {
        textTransform: 'capitalize'
    }
}))
const BlockbusterPreview = ({ watchOnline, handleBookTickets }) => {
    const classes = useStyles();
    const { state, dispatch } = useBlockbusterContext();
    const [selectedMovie, setSelectedMovie] = useState(state.selectedMovie);
    const { RatingsStarIcon, VideoRuntime, AccountCircleIcon } = icons;

    return (
        <Grid xs={12} className={classes.mainBody}>
            <Grid container xs={12} className={classes.movieDetails1}
                style={{ backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${selectedMovie.cover}` }}>
                <Grid item xs={4} className={classes.movieImage}>
                    <img src={selectedMovie.image} alt={'selected-movie'} className={classes.image} />
                </Grid>
                <Grid item xs={8} className={classes.movieDetails}>
                    <Typography varient='h1' className={classes.movieTitle}>{selectedMovie.title}</Typography>
                    <Typography varient='h1' className={classes.movieGenre}>{selectedMovie.genre.join(', ')}</Typography>
                    <Typography varient='h1' className={classes.movieRating}><RatingsStarIcon className={classes.ratings} />{selectedMovie.ratings}/10</Typography>
                    <Typography varient='h1' className={classes.movieGenre}><VideoRuntime className={classes.runTime} />{selectedMovie.runTime}</Typography>
                    <Typography varient='h1' className={classes.movieSynopsis}>{selectedMovie.synopsis}</Typography>
                    <div className={classes.buttonsDiv}>
                        <Button variant="contained" color="secondary" className={classes.buttonMain}
                            onClick={() => watchOnline({ ...selectedMovie, mode: 'trailer' })}>Watch Trailer
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.buttonMain}
                            onClick={() => watchOnline({ ...selectedMovie, mode: 'movie' })}>Watch Movie
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.buttonMain}
                            onClick={() => handleBookTickets(selectedMovie)}>Book Tickets
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={12} className={classes.movieDetails2}>
                <Typography varient='h1' className={classes.movieCastText}>Casts</Typography>
                {selectedMovie && selectedMovie?.cast.map(item => {
                    return <div className={classes.castMain}>
                        <AccountCircleIcon style={{ width: 90, height: 90 }} />
                        <Typography varient='h1' className={classes.movieCasts}>{item}</Typography>
                    </div>
                })}
            </Grid>
        </Grid>
    )
}

export default BlockbusterPreview;