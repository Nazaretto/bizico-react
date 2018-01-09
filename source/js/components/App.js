import React from "react";
import Header from "./Header";
import Page1 from './Page1';
import Home from './Home'
import {
  Route,
  Link,
  Switch
 } from 'react-router-dom';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome, ",
    };
  }

  changeTitle(title) {
    this.setState({title: "Welcome,"+ title});
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
          </Switch>
        </div>
    </div>
    );
  }

}
