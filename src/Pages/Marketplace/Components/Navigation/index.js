
import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MarketplaceProvider, useMarketplaceContext } from '../../../../Setup/Context/MarketplaceContext';
import '../../marketplace.css';
import { useHistory, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    marketplace: {
        fontWeight: 600,
        fontSize: '20px',
        cursor: 'pointer'
    },
    navButtonActive: {
        background: '#2763FF',
        color: '#fff',
        width: '100%',
        borderRadius: '30px',
        fontSize: '13px',
        padding: '10px 24px',
        textTransform: 'capitalize',
        justifyContent: 'left',
        '&:hover': {
            background: '#2763FF',
            color: '#fff',
        }
    },
    navButton: {
        background: '#fff',
        color: '#000',
        width: '100%',
        borderRadius: '30px',
        fontSize: '13px',
        padding: '10px 24px',
        textTransform: 'capitalize',
        justifyContent: 'left',
        '&:hover': {
            background: '#2763FF',
            color: '#fff',
        }
    },
    navigationBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: 70,


    }
}))

const MarketplaceNavigation = ({ showMarketPlace, active, handleSidenav }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className='marketplace-navigation'>
            <Grid item xs={12} spacing={4}>
                <Typography className={classes.marketplace} onClick={showMarketPlace}>Marketplace</Typography>
            </Grid>
            <Grid item xs={12} className={classes.navigationBox}>
                {active.map((item, index) => {
                    return <Button key={index} className={item.active ? classes.navButtonActive : classes.navButton} onClick={() => handleSidenav(item)} startIcon={item.icon}>{item.name}</Button>
                })}
            </Grid>
        </div>
    )
}

export default MarketplaceNavigation;