import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactDOM from "react-dom"
import "./styles/styles.scss"

import TopBar from './components/topBar'
import ListingsApp from "./ListingsApp"
import SignupForm from "./components/signUpform"
import SigninForm from "./components/signInForm"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/" component={SignupForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={SigninForm} />
        <Route path="/listings" component={ListingsApp} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
)