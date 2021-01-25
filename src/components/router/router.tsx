import React from 'react';
import './router.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../home/home';
import AddFamiliars from '../add-familiars/add-familiars';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
            {/* <AddFamiliars /> */}
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
