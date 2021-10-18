import React from 'react';
import { Redirect, Route, Switch } from "react-router";
//Components
import Home from "./Home";
import Jam3yasList from "./Jam3yasList"
import PageNotFound from "./PageNotFound"
// import RegLog from "./RegLog"

const Routes = () => {
    return (
        <>
            <Switch>
            <Route path="/Jam3ya">
                <Jam3yasList/>
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
