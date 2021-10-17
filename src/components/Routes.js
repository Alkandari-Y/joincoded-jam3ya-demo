import React from 'react';
import { Redirect, Route, Switch } from "react-router";
//Components
import Home from "./Home";
import Jam3ya from "./Jam3ya"
import PageNotFound from "./PageNotFound"

const Routes = () => {
    return (
        <>
            <Switch>
            <Route path="/Jam3ya">
                <Jam3ya/>
            </Route>
            <Route path="/404">
              <PageNotFound />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/404"/>
          </Switch>
        </>
    )
}

export default Routes
