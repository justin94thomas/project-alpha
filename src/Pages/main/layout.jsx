import React, { Suspense, useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Routes from '../../Setup/routes-manager/routes.json';
import { Box, makeStyles } from '@material-ui/core';
import Header from "../../Components/Header";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../Utils/ErrorBoundary';
import Loader from '../../Components/Loader';
import Dashboard from "../dashboard";
import ShoppingCart from "../Shopping-Cart";

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
                                    <Route exact path={Routes.dashboard}>
                                        <Dashboard />
                                    </Route>
                                    <Route exact path={Routes.shoppingApp}>
                                        <ShoppingCart />
                                    </Route>
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
