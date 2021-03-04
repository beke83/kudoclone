import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./components/boards/boardDashboard/dashboard";
import BoardDetailedPage from './components/boards/boardDetailed/BoardDetailedPage';
import HomePage from './components/home/Home';

const Routes = () => {
    return (
        <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/boards/:id" component={BoardDetailedPage} />
        </Switch>
    );
}

export default Routes;