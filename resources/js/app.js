/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Landing from './components/Landing';
import AddNewCourse from './components/addNewCourse';



render(
  <Router history={browserHistory}>
      <Route path="/" component={AddNewCourse} >
        <Route path="/add-exam" component={Landing} />
        <Route path="/pass-test" component={Landing} />
        <Route path="/edit/:id" component={Landing} />
      </Route>
    </Router>,
        document.getElementById('main'));
