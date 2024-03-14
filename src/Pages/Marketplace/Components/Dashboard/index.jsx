import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';
import MarketplaceData from '../data.json';
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderBottom: '2px solid #D5EF82',
        margin: "30px 0px"
    },
    headerText: {
        fontSize: '56px',
        fontWeight: 600,
    },
    subHeader: {
        fontSize: '16px',
        margin: "10px 0px"
    },
    box: {
        transition: 'box-shadow .075s ease-in-out',
        boxShadow: '0 4px 15px 2px rgba(0,0,0,.1)',
        height: '80px',
        width: '130px',
        cursor: 'pointer'
    }
}))

const MarketplaceDashboard = (props) => {
    const { handleSelectedProduct } = props;
    const classes = useStyles();
    const { t } = useTranslation();
    const history = useHistory();


    return (<>
        <Grid container xs={12}>
            <Grid item xs={6} style={{ height: '350px' }}>
                <Grid item xs={12} className={classes.header}>
                    <Typography varient='h6' className={classes.headerText}>{t('headings:Marketplace_Header')}</Typography>
                    <Typography varient='p' className={classes.subHeader}>{t('headings:Marketplace_SubText')}</Typography>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', gap: '25px' }}>
                    {MarketplaceData.Dashboard.map(item => {
                        return <Box className={classes.box} onClick={() => handleSelectedProduct(item)}>
                            <img src={item.image} style={{ height: '100%' }} />
                            <Typography varient='p' className={classes.subHeader}>{item.name}</Typography>
                        </Box>
                    })}
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Carousel fade>
                    {MarketplaceData.Dashboard.map(item => {
                        return <Carousel.Item>
                            <img src={item.image} alt={item.alt} style={{ width: '100%' }} />
                        </Carousel.Item>
                    })}
                </Carousel>
            </Grid>
        </Grid>
    </>)
}

export default MarketplaceDashboard;