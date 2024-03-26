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
    },
    movieBox: {
        padding: '10px',
        textAlign: '-webkit-center',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '8px 4px 8px 1px rgba(0, 0, 0, 0.2), 16px 6px 20px 1px rgba(0, 0, 0, 0.19), -8px 16px 12px -2px rgba(0, 0, 0, 0.2)'
        }
    },
    movieName: {
        display: 'block',
        color: '#fff',
        fontSize: 12,
        background: '#000',
        width: '100%'
    },
    movieRatings: {
        display: 'block',
        color: '#fff',
        background: '#000',
        width: '100%'
    },
    movieImg: {
        width: '200px',
        height: '310px'
    },
    movieCardMain: {
        display: 'flex',
        gap: 10,
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
    itemDetails: {
        width: '100%'
    },
    ratings: {
        marginRight: '5px',
        marginTop: '-6px',
        fill: 'red'
    }
}))

const InTheaters = ({ movieData, handleSelectedMovie }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { RatingsStarIcon } = icons;


    return (
        <>
            <Typography varient='h2' className={classes.recommendText}>{t('headings:Recommended_Movies')}</Typography>
            <Grid container xs={12} className={classes.movieCardMain}>
                {movieData && movieData.length > 0 ?
                    <>

                        {movieData.map((item, index) => {
                            return <Grid item className={classes.movieBox} key={index} onClick={() => handleSelectedMovie(item)}>
                                <div style={{ borderRadius: '4px' }}>
                                    <Box className={classes.cardImgBox}>
                                        <img src={item.image} className={classes.movieImg} />
                                    </Box>
                                    <Box className={classes.itemDetails}>
                                        <Typography variant='p' className={classes.movieName}>{item.title}</Typography>
                                        <Typography variant='p' className={classes.movieRatings}><RatingsStarIcon className={classes.ratings} />{item.ratings}/10</Typography>
                                    </Box>
                                </div>
                            </Grid>
                        })}
                    </> : <Typography>No Movies Available</Typography>}
            </Grid>
        </>
    )
}

export default InTheaters