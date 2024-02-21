// EntryPoint.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Pages/main/layout';

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
            <Route path="/" component={Layout} />
        </Router>
    );
}

export default EntryPoint;
