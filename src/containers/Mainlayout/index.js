import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, makeStyles, useTheme } from '@material-ui/core';
import HeaderAppBar from '../ProjectAlpha/Header';

const Mainlayout = () => {
    return (
        <>
            <Router>
                <div className="App">
                    <div className="content">
                        <Switch>
                            <Route path='/dashboard-alpha'>
                                <HeaderAppBar />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Mainlayout;
