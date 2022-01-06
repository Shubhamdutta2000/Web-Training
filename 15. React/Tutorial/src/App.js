import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

import CodeWithJSX from "./components/CodeWithJSX";
import CodeWithoutJsx from "./components/CodeWithoutJsx";
import Functionalcomponent from "./components/Functional component";
import ClassCompoenet from "./components/ClassCompoenet";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Parent from "./components/Props/Parent";

function App() {
  return (
    <>
      {/* <Functionalcomponent /> */}
      {/* <CodeWithJSX /> */}
      {/* <Parent /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
