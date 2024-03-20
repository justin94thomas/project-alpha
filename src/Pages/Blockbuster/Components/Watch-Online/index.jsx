import React, { useEffect, useState } from 'react';
import { Grid, IconButton, makeStyles, Dialog, DialogContent, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { images, icons } from '../../../../Setup/Content/assets';


const useStyles = makeStyles((theme) => ({
    movieDetails1: {
        justifyContent: 'center',
        zIndex: 1,
        background: 'rgba(0, 0, 0)',
        position: 'relative'
    },
    video: {
        height: '75.3vh !important',
        width: '75% !important',
        zIndex: 11111,
        color: '#fff',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    iconButton: {
        height: '35px',
        width: '35px',
        position: 'absolute',
        right: '10px',
        top: '10px',
        color: '#fff',
        cursor: 'pointer'
    },
}));

const WatchOnline = ({ previewMovie, closePreview }) => {
    const classes = useStyles();
    const { Sidebar, Close } = icons;
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (previewMovie) {
            if (previewMovie.mode === 'trailer') {
                setUrl(previewMovie.trailer)
            } else if (previewMovie.mode === 'movie') {
                setUrl(previewMovie.movie || '')
            } else {
                setUrl('')
            }
        }
    }, [previewMovie])
    return (
        <Grid xs={12} className={classes.mainBody}>
            <Grid container xs={12} className={classes.movieDetails1}>
                {url !== "" ? <ReactPlayer controls url={url} className={classes.video} /> : <Typography className={classes.video}>Content Not Available</Typography>}
                <Close onClick={closePreview} className={classes.iconButton} />
            </Grid>
        </Grid>
    )
}

export default WatchOnline;
