import React from 'react';
import './router.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../home/home';
import AddFamiliars from '../add-familiars/add-familiars';
import ChoosePlan from '../choose-plan/choose-plan';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/choose-plan">
            <ChoosePlan />
          </Route>
          <Route path="/familiars">
            <AddFamiliars />
          </Route>
          <Route path="/">
            <Home />
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
