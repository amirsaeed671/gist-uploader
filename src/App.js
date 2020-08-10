import React, { lazy, Suspense, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "common/container";
import Notification from "context-reducers/context";
import { reducer, initialState } from "context-reducers/reducers";

const Gists = lazy(() => import("Gists"));
const Login = lazy(() => import("Login"));
const Popup = lazy(() => import("common/popup"));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState());
  return (
    <Container>
      <Suspense fallback={null}>
        <Notification.Provider value={{ state, dispatch }}>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/gists" exact component={Gists} />
            </Switch>
          </Router>
          <Popup />
        </Notification.Provider>
      </Suspense>
    </Container>
  );
}

export default App;
