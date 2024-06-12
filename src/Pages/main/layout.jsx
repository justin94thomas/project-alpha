// Layout.js
import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { Suspense, useState } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch } from 'react-router-dom';
import Header from "../../Components/Header";
import Loader from '../../Components/Loader';
import Routes from '../../Setup/routes-manager/routes.json';
import { ErrorFallback } from '../../Utils/ErrorBoundary';
const Dashboard = React.lazy(() => import('../Dashboard'));
const Marketplace = React.lazy(() => import('../Marketplace'));
const Blockbuster = React.lazy(() => import('../Blockbuster'));

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        position: 'fixed',
        width: '100%'
    },
    content: {
        width: '100%',
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
                        <Box className={classes.content} style={isMobile ? { height: '65vh' } : { height: '90vh' }}>
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
