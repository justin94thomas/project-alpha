import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, makeStyles, withStyles, Tabs, Tab } from '@material-ui/core';
import { images, icons } from '../../../../Setup/Content/assets';
import { useTranslation } from 'react-i18next';

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
        height: '132px'
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
        padding: '10px 0px'
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

const MovieCardUpcomming = ({ movieData }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { RatingsStarIcon } = icons;
    useEffect(() => {
        if (movieData) {
            console.log(movieData, "movieData")
        }
    }, [movieData])

    return (
        <>
            <Typography varient='h2' className={classes.recommendText}>{t('headings:Upcomming_Movies')}</Typography>
            <Grid container xs={12} className={classes.movieCardMain}>
                {movieData && movieData.length > 0 ?
                    <>
                        {movieData.map((item, index) => {
                            return <div className={classes.movieBox} key={index}>
                                <div className={classes.cardImgBox}>
                                    <img src={item.image} className={classes.movieImg} />
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