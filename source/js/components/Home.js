import React from 'react';
import Header from './Header';


import {
  Route,
  Link
 } from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique assumenda adipisci, necessitatibus illo est, at numquam aut, quas pariatur velit autem. Hic inventore, repellat praesentium dolore sunt explicabo blanditiis libero.</p>
      
        {this.props.children}
      </div>
    );
  }

}
