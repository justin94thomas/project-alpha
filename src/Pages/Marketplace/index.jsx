import { Box, Grid, Tab, Tabs } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { icons } from '../../Setup/Content/assets';
import { MarketplaceProvider, useMarketplaceContext } from '../../Setup/Context/MarketplaceContext';
import Routes from '../../Setup/routes-manager/routes.json';
import Page404 from './Components/404';
import MarketplaceCart from './Components/Cart';
import MarketplaceDashboard from './Components/Dashboard';
import MarketplaceNavigation from './Components/Navigation';
import ProductList from './Components/Product';
import './marketplace.css';

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
    addedToCart: {
        borderRadius: '50%',
        width: 16,
        border: '1px solid',
        lineHeight: '15px',
        background: 'red !important',
        color: '#fff',
        position: 'absolute',
        top: '-11px',
        right: '-5px',
        fontSize: '10px'
    },
    marketplaceMain: {
        height: '100vh'
    },
    sidenav: {
        height: '100%',
        borderRight: '1px solid #eee',
        padding: 16,
        textAlign: 'left'
    },
    dashboardMain: {
        height: '100%',
        padding: 16,
    },
    tabButton: {
        border: '1px solid #eee',
        borderRadius: '30px',
        background: '#eee !important'
    },
    navBackground: {
        padding: '10px',
        background: '#eee !important',
        borderRadius: '50%',
        height: '41px',
        lineHeight: '10px',
        overflow: 'hidden'
    }
}))
const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent !important',
        '& > span': {
            maxWidth: 50,
            width: '100%',
            backgroundColor: '#635ee7 !important',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#000',
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },

}))((props) => <Tab disableRipple {...props} />);

const Header = (props) => {
    const { handleShowCart } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { state, dispatch } = useMarketplaceContext();


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.marketplaceHeader}>
            <Grid container xs={12}>
                <Grid item xs={6} className={classes.marketplaceHead}>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab className={classes.tabButton} label="Exclusive" />
                        <StyledTab className={classes.tabButton} label="Accessories" />
                        <StyledTab className={classes.tabButton} label="New Arriavals" />
                    </StyledTabs>
                </Grid>
                <Grid item xs={6} className={classes.profile}>
                    <Box className={classes.navBackground}>
                        <CiSearch size={20} />
                    </Box>
                    <Box className={classes.navBackground}>
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <MdOutlineShoppingCart size={20} style={{ cursor: 'pointer' }} onClick={handleShowCart} />
                            {state?.cart.length > 0 ? <span className={classes.addedToCart}>{state?.cart.length}</span> : null}
                        </div>
                    </Box>
                    <Box className={classes.navBackground}>
                        <FaUserCircle size={20} />
                    </Box>
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
        showCart: false,
        show404: false
    })
    const { Sneakers, Clothing } = icons;

    const [sidenav, setSidenav] = useState([
        { name: 'Home', icon: Sneakers, active: true, link: Routes.marketplace },
        { name: 'Popular Products', icon: Clothing, active: false, link: Routes.marketplace },
        { name: 'Explore New', icon: Clothing, active: false, link: Routes.marketplace },
    ])
    const handleSelectedProduct = (item) => {
        setOpenScreen({
            dashboard: false,
            showProducts: true,
            showCart: false,
            show404: false
        })
        setSelectedProduct(item);
    }
    const handleSidenav = (item) => {
        const updatedSidenav = sidenav.map((sidenavItem) => {
            if (sidenavItem.name === item.name) {
                return { ...sidenavItem, active: true };
            } else {
                return { ...sidenavItem, active: false };
            }
        });
        setSidenav(updatedSidenav);
        if (item.name !== 'Home') {
            handleShow404();
        } else {
            setOpenScreen({
                dashboard: true,
                showProducts: false,
                showCart: false,
                show404: false
            })
        }
    }
    const showMarketPlace = () => {
        setOpenScreen({
            dashboard: true,
            showProducts: false,
            showCart: false,
            show404: false
        })
    }
    const handleShowCart = () => {
        setOpenScreen({
            dashboard: false,
            showProducts: false,
            showCart: true,
            show404: false
        })
    }
    const handleShow404 = () => {
        setOpenScreen({
            dashboard: false,
            showProducts: false,
            showCart: false,
            show404: true
        })
    }

    return (
        <div className='marketplace-container'>
            <MarketplaceProvider>
                <Grid container xs={12} className={classes.marketplaceMain}>
                    <Grid item xs={2} className={classes.sidenav}>
                        <MarketplaceNavigation showMarketPlace={showMarketPlace} active={sidenav} handleSidenav={handleSidenav} />
                    </Grid>
                    <Grid item xs={10} className={classes.dashboardMain}>
                        <Grid item xs={12} className={classes.postion2}>
                            <Header showMarketPlace={showMarketPlace} handleShowCart={handleShowCart} />
                            {openScreen?.dashboard && <MarketplaceDashboard handleSelectedProduct={handleSelectedProduct} />}
                            {openScreen?.showProducts && <ProductList selectedProduct={selectedProduct} />}
                            {openScreen?.showCart && <MarketplaceCart />}
                            {openScreen?.show404 && <Page404 />}
                        </Grid>
                    </Grid>
                </Grid>
            </MarketplaceProvider>
        </div>
    )
}

export default Marketplace;