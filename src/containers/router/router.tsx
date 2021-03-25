import React from 'react';
import './router.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ChoosePlan from '../choose-plan/choose-plan';
import AddFamiliars from '../add-familiars/add-familiars';
import Home from '../home/home';
import { getCurrentUser } from '../../utils/services';

function PrivateRoute({component:Component ,...rest}: {path: string,component:  any}) {
  return <Route
    {...rest}
    render={props =>
      getCurrentUser() ? 
      <Component {...props} />
      :
      <Redirect 
        to={{
          pathname:'/',
          state: {
            from: props.location
          }
        }}
      />
    }
  ></Route>
}

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/choose-plan" component={ChoosePlan} />
          <PrivateRoute path="/familiars" component={AddFamiliars} />
          {/* <AddFamiliars /> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
