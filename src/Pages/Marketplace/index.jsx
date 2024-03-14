import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, makeStyles, } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import './marketplace.css';
import MarketplaceDashboard from './Components/Dashboard';
import ProductList from './Components/Product';
import MarketplaceCart from './Components/Cart';
import { MarketplaceProvider, useMarketplaceContext } from '../../Setup/Context/MarketplaceContext';


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
    },
    addedToCart: {
        borderRadius: '50%',
        width: 16,
        border: '1px solid',
        lineHeight: '15px',
        background: 'red',
        color: '#fff',
        position: 'absolute',
        top: '-14px',
        right: '-10px',
        fontSize: '10px'
    },
}))
const Header = (props) => {
    const { showMarketPlace, handleShowCart } = props;
    const theme = useTheme();
    const classes = useStyles();
    const { state, dispatch } = useMarketplaceContext();

    useEffect(() => {
        if (state?.cart?.length > 0) {
            console.log('cart data', state?.cart);
        }
    }, [state])

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
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <MdOutlineShoppingCart size={20} style={{ cursor: 'pointer' }} onClick={handleShowCart} />
                        {state?.cart.length > 0 ? <span className={classes.addedToCart}>{state?.cart.length}</span> : null}
                    </div>
                    <FaUserCircle size={20} />
                </Grid>
            </Grid>
        </div>
    )
}

const Marketplace = () => {
    const classes = useStyles();
    const [selectedProduct, setSelectedProduct] = useState();
    const [openScreen, setOpenScreen] = useState({
        dashboard: true,
        showProducts: false,
        showCart: false
    })

    const handleSelectedProduct = (item) => {
        setOpenScreen({
            dashboard: false,
            showProducts: true,
            showCart: false
        })
        setSelectedProduct(item);
    }
    const showMarketPlace = () => {
        setOpenScreen({
            dashboard: true,
            showProducts: false,
            showCart: false
        })
    }
    const handleShowCart = () => {
        setOpenScreen({
            dashboard: false,
            showProducts: false,
            showCart: true
        })
    }

    return (
        <div className='marketplace-container'>
            <MarketplaceProvider>
                <Grid container xs={12}>
                    <Grid item xs={12} className={classes.postion1}>
                        <Header showMarketPlace={showMarketPlace} handleShowCart={handleShowCart} />
                    </Grid>
                    <Grid item xs={12} className={classes.postion2}>
                        {openScreen?.dashboard && <MarketplaceDashboard handleSelectedProduct={handleSelectedProduct} />}
                        {openScreen?.showProducts && <ProductList selectedProduct={selectedProduct} />}
                        {openScreen?.showCart && <MarketplaceCart />}
                    </Grid>
                </Grid>
            </MarketplaceProvider>
        </div>
    )
}

export default Marketplace;