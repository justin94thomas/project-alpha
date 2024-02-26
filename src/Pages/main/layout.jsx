// Layout.js
import React, { Suspense, useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Routes from '../../Setup/routes-manager/routes.json';
import { Box, makeStyles } from '@material-ui/core';
import Header from "../../Components/Header";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../Utils/ErrorBoundary';
import Loader from '../../Components/Loader';
import Dashboard from "../dashboard";
import ShoppingCart from "../Shopping-Cart";
import SneakerShop from "../Sneaker-Shop/index";
import Marketplace from "../Marketplace";
import ProductList from "../Marketplace/Components/Product";
import Timer from "../Timer";

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        position: 'fixed',
        width: '100%'
    },
    content: {
        margin: '16px',
    }
}))

function Layout() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                window.location.reload();
            }}
        >
            <Suspense fallback={<Loader />}>
                {loading && <Loader />}
                <Box>
                    <div className={classes.mainWrapper}>
                        <Header />
                        <Box className={classes.content}>
                            <Suspense fallback={<Loader />}>
                                <Switch>
                                    <Route path={Routes.dashboard} component={Dashboard} />
                                    <Route path={Routes.shoppingApp} component={ShoppingCart} />
                                    <Route path={Routes.timer} component={Timer} />
                                    <Route path={Routes.sneakerShop} component={SneakerShop} />
                                    <Route path={Routes.marketplace} component={Marketplace} />
                                    <Route path={Routes.marketplaceList} component={ProductList} />
                                </Switch>
                            </Suspense>
                        </Box>
                    </div>
                </Box>
            </Suspense>
        </ErrorBoundary>
    );
}

export default Layout;
