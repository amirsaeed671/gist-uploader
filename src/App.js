import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "common/container";

const Gists = lazy(() => import("Gists"));
const Login = lazy(() => import("Login"));

function App() {
  return (
    <Container>
      <Suspense fallback={null}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/gists" exact component={Gists} />
          </Switch>
        </Router>
      </Suspense>
    </Container>
  );
}

export default App;
