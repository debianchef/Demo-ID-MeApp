import React, { useReducer } from "react";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";

import Callback from "./components/Callback";
import Verify from "./components/Verify";
import Header from "./components/Header";

import UserView from "./results/UserView";
import OAuthExchange from "./results/OAuthExchange";
import APIResponse from "./results/APIResponse";

import { initialState, reducer } from "./reducer";

const Demo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sandbox, payload } = state;

  const Reset = () => {
    return (
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large grey darken-1" to="/">
          <i className="large material-icons">autorenew</i>
        </Link>
      </div>
    );
  };

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Verify sandbox={sandbox} dispatch={dispatch}></Verify>
          </Route>
          <Route exact path="/callback">
            <Callback domain={"id.me"} dispatch={dispatch}></Callback>
            <Redirect to="/results" />
          </Route>
          <Route exact path="/sandbox/callback">
            <Callback domain={"idmelabs.com"} dispatch={dispatch}></Callback>
            <Redirect to="/results" />
          </Route>
          <Route path="/results">
            {payload === {} && <Redirect to="/" />}
            <Route exact path="/results">
              <UserView state={state}></UserView>
            </Route>
            <Route exact path="/results/oauth-exchange">
              <OAuthExchange state={state}></OAuthExchange>
            </Route>
            <Route exact path="/results/api-response">
              <APIResponse state={state}></APIResponse>
            </Route>
            <Reset />
          </Route>
        </Switch>
      </BrowserRouter>
      <div className="container">
        <div className="row">
          <a
            className="center-align col s12"
            href={"https://forms.gle/LcMQniMsXRicjPUz7"}
            target={"_new"}
          >
            Click here to provide feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demo;
