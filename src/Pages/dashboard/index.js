import React, { useState, useEffect } from "react";
import { Box, Grid, makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Projects from './projects.json';


const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        gap: 20,
        padding: '16px'
    },
    content: {
        border: '1px solid #f4f4f4',
        borderRadius: 8,
        minHeight: '30px',
        background: '#f4f4f4',
        cursor: 'pointer'
    }
}))
export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();

    const handleNavigate = (item) => {
        history.push(item.Routes)
    }

    return (
        <Box>
            <Grid container xs={12} spacing={2} className={classes.main}>
                {Projects?.Content.map(item => {
                    return <Grid item xs={2} className={classes.content} onClick={() => handleNavigate(item)}>
                        <Typography variant="p">{item.Name}</Typography>
                    </Grid>
                })}
            </Grid>
        </Box>
    )
}