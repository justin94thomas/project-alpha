import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainlayout from "../Mainlayout";
const Index = () => {
    return (
        <>
            <Router>
                <div className="App">
                    <div className="content">
                        <Switch>
                            <Route path='/'>
                                <Mainlayout />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    )
}
export default Index;