
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from "react-router-dom";
import '../../marketplace.css';


const useStyles = makeStyles((theme) => ({
    marketplace: {
        fontWeight: 600,
        fontSize: '20px',
        cursor: 'pointer'
    },
    navButtonActive: {
        background: '#2763FF !important',
        color: '#fff !important',
        width: '100%',
        borderRadius: '30px',
        fontSize: '13px',
        padding: '10px 24px',
        textTransform: 'capitalize',
        justifyContent: 'left',
        '&:hover': {
            background: '#2763FF !important',
            color: '#fff !important',
        }
    },
    navButton: {
        background: '#fff !important',
        color: '#000 !important',
        width: '100%',
        borderRadius: '30px',
        fontSize: '13px',
        padding: '10px 24px',
        textTransform: 'capitalize',
        justifyContent: 'left',
        '&:hover': {
            background: '#2763FF !important',
            color: '#fff !important',
        }
    },
    navigationBox: {
        display: 'flex',
        flexDirection: 'column !important',
        gap: '8px',
        marginTop: '32px !important',


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