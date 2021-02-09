import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dashboard from "./components/boardDashboard/dashboard";

const Routes = () => {
    return (
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
    );
}

export default Routes;