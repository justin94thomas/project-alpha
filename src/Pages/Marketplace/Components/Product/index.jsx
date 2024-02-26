import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles, useTheme, } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';
import MarketplaceData from '../data.json';

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

const ProductList = () => {
    const classes = useStyles();
    const { t } = useTranslation();


    return (
        <>Product List</>
    )
}

export default ProductList;
