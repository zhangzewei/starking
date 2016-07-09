import React, { Component, PropTypes } from 'react';
import Nav from './nav';
import Login from './login';
import Register from './register';

class header extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Login />
        <Register />
      </div>
    );
  }
}

export default header;
