import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class main extends Component {
  render() {
    return (
    <div className="page-container row-fluid">
      <div className="page-sidebar nav-collapse collapse">
        <ul className="page-sidebar-menu">
          <li className="active ">
  					<a href="javascript:;">
  					<i className="icon-cogs"></i>
  					<span className="title">Layouts</span>
  					<span className="selected"></span>
  					<span className="arrow open"></span>
  					</a>
  					<ul className="sub-menu">
  						<li >
  							<Link to="/dashboard">dashboard</Link>
  						</li>
  						<li >
  							<Link to="/girlslist">girlslist</Link>
  						</li>
  					</ul>
  				</li>
        </ul>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export default main;
