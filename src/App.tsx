import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "components/Navbar";
import { Link1, Link2, Link3, About } from "components/TestComponents";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Router basename="/lizard_valley">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Component} />
            <Route path="/link1" component={Link1} />
            <Route path="/link2" component={Link2} />
            <Route path="/link3" component={Link3} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    )
  }
}