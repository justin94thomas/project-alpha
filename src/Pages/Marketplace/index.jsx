import React, { useState } from 'react';
import { Grid, Box, Typography, makeStyles, useTheme, } from '@material-ui/core';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import './marketplace.css';
import MarketplaceDashboard from './Components/Dashboard';
import ProductList from './Components/Product';

const useStyles = makeStyles((theme) => ({
    marketplaceHeader: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        height: '100%'
    },
    marketplaceHead: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    profile: {
        display: 'flex',
        gap: 10,
        justifyContent: 'end'
    },
    postion1: {
        border: '1px solid #eee',
        borderRadius: '8px',
        height: '80px',
        padding: '10px'
    },
    marketplace: {
        fontWeight: 600,
        fontSize: '20px',
        cursor: 'pointer'
    }
}))
const Header = (props) => {
    const { showMarketPlace } = props;
    const theme = useTheme();
    const classes = useStyles();

    return (
        <div className={classes.marketplaceHeader}>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Typography className={classes.marketplace} onClick={showMarketPlace}>Marketplace</Typography>
                </Grid>
                <Grid item xs={4} className={classes.marketplaceHead}>
                    <Typography>Exclusive</Typography>
                    <Typography>Accessories</Typography>
                    <Typography>New Arriavals</Typography>
                </Grid>
                <Grid item xs={4} className={classes.profile}>
                    <CiSearch size={20} />
                    <MdOutlineShoppingCart size={20} />
                    <FaUserCircle size={20} />
                </Grid>
            </Grid>
        </div>
    )
}

const Marketplace = () => {
    const classes = useStyles();
    const [showProducts, setShowProducts] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();

    const handleSelectedProduct = (item) => {
        setShowProducts(true)
        setSelectedProduct(item);
    }
    const showMarketPlace = () => {
        setShowProducts(false);
    }
    return (
        <div className='marketplace-container'>
            <Grid container xs={12}>
                <Grid item xs={12} className={classes.postion1}>
                    <Header showMarketPlace={showMarketPlace} />
                </Grid>
                <Grid item xs={12} className={classes.postion2}>
                    {showProducts ? <ProductList selectedProduct={selectedProduct} /> :
                        <MarketplaceDashboard handleSelectedProduct={handleSelectedProduct} />
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Marketplace;