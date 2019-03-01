import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Landing from "./components/pages/Landing"
import Home from "./components/pages/Home"

function App(props) {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home/:sessionID" component={Home}/>
      </Switch>
    </Router>
  )
}

export default App;
