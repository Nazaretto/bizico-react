import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Page1 from './components/Page1';
// import Layout from "./components/Layout"
import {
  Route,
  BrowserRouter,
  IndexRoute,
  Switch
 } from 'react-router-dom';

const el = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, el);
