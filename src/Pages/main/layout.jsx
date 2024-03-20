// Layout.js
import React, { lazy, Suspense, useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Routes from '../../Setup/routes-manager/routes.json';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../Utils/ErrorBoundary';
import Header from "../../Components/Header";
import Loader from '../../Components/Loader';
const Dashboard = React.lazy(() => import('../dashboard'));
const Marketplace = React.lazy(() => import('../Marketplace'));
const Blockbuster = React.lazy(() => import('../Blockbuster'));

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        position: 'fixed',
        width: '100%'
    },
    content: {
        height: '90vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: '#aaa',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#000'
        }
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
                    <Grid container xs={12} className={classes.mainWrapper}>
                        <Header />
                        <Box className={classes.content} style={{ width: '100%' }}>
                            <Suspense fallback={<Loader />}>
                                <Switch>
                                    <Route path={Routes.dashboard} component={Dashboard} />
                                    <Route path={Routes.marketplace} component={Marketplace} />
                                    <Route path={Routes.blockbuster} component={Blockbuster} />
                                </Switch>
                            </Suspense>
                        </Box>
                    </Grid>
                </Box>
            </Suspense>
        </ErrorBoundary>
    );
}

export default Layout;
