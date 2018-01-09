import React from "react";
import Header from './Header';
import {
  Route,
  Link
 } from 'react-router-dom';

export default class Page1 extends React.Component {

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Page 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique assumenda adipisci, necessitatibus illo est, at numquam aut, quas pariatur velit autem. Hic inventore, repellat praesentium dolore sunt explicabo blanditiis libero.</p>
        <Link to={match.url + "/header"} >Header</Link>
        <Route path={match.url +"/header"} component={Header}/>
        <Route path={match.url +"/header"} component={Header}/>
        {this.props.children}
        {console.log(this)}
      </div>
    );
  }

}
