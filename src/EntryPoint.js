// EntryPoint.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Main from './Pages/main';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                <Component {...props} />
            }
        />
    );
}

function EntryPoint() {
    return (
        <Router>
            <Redirect exact from='/' to='/dashboard' />
            <Route path="/" component={Main} />
        </Router>
    );
}

export default EntryPoint;
