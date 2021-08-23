import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Details } from '../../pages/Details';
import { Main } from '../../pages/Main';

export const AppRouter = (): ReactElement => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path='/details/:id'component={Details}/>
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </Router>
    );
};