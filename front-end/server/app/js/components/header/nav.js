import React, { Component, PropTypes } from 'react';

class nav extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <a href="#" className="brand-logo">StarKing</a>
          <ul id="nav-mobile" className="right">
            <button className="waves-effect waves-light btn op-login">登录</button>
            <button className="waves-effect waves-light btn op-register">注册</button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default nav;
