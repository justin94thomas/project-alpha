import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { icons } from '../../../../Setup/Content/assets';

const useStyles = makeStyles((theme) => ({
    recommendText: {
        fontWeight: 600,
        fontSize: '20px',
        textAlign: 'left'
    },
    movieSection: {
        height: '100%',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000'
        }
    },
    movieBox: {
        display: 'flex',
        border: '1px solid #ccc',
        borderRadius: '8px',
        height: '132px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0 3px 12px 0px rgba(0, 0, 0, 0.2), 0 0px 8px -9px rgba(0, 0, 0, 0.19)'
        }
    },
    cardImgBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    movieName: {
        display: 'flex',
        color: '#fff',
        fontSize: 12,
        background: '#000',
        width: '100%',
        textAlign: 'left',
        padding: '7px 15px 7px',
    },
    movieRatings: {
        display: 'block',
        color: '#fff',
        background: '#000',
        width: '100%'
    },
    movieImg: {
        width: '104px',
        height: '132px'
    },
    movieCardMain: {
        display: 'flex',
        gap: 10,
        padding: '10px 0px',
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
    movieDescription: {
        fontSize: '12px',
        textAlign: 'left',
        margin: '4px 15px 5px',
        width: '240px',
        overflow: 'hidden'
    },
    itemDetails: {
        width: '100%'
    },
    ratings: {
        marginRight: '5px',
        marginTop: '-6px',
        fill: 'red'
    },
    upcomingLabel: {
        width: '185px',
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
}))

const MovieCardUpcomming = ({ movieData, handleSelectedMovie }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { RatingsStarIcon } = icons;


    return (
        <>
            <Typography varient='h2' className={classes.recommendText}>{t('headings:Upcomming_Movies')}</Typography>
            <Grid container xs={12} className={classes.movieCardMain}>
                {movieData && movieData.length > 0 ?
                    <>
                        {movieData.map((item, index) => {
                            return <div className={classes.movieBox} key={index} onClick={() => handleSelectedMovie(item)}>
                                <div className={classes.cardImgBox}>
                                    <img src={item.image} alt={"upcomming-movie"} className={classes.movieImg} />
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <Typography variant='p' className={classes.movieName}>
                                        <span className={classes.upcomingLabel}>{item.title}</span>
                                        <span style={{ float: 'right' }}><RatingsStarIcon className={classes.ratings} />{item.ratings}/10</span>
                                    </Typography>
                                    <Typography className={classes.movieDescription}>{item.synopsis}</Typography>
                                </div>
                            </div>
                        })}
                    </> : <Typography>No Upcomming Movies</Typography>}
            </Grid>
        </>
    )
}

export default MovieCardUpcomming