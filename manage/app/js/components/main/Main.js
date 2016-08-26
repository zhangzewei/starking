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
  					<span className="title">Magage Menu</span>
  					<span className="selected"></span>
  					<span className="arrow open"></span>
  					</a>
  					<ul className="sub-menu">
  						<li >
  							<Link to="/dashboard">dashboard</Link>
  						</li>
  						<li >
  							<Link to="/girlslist">Girls List</Link>
  						</li>
              <li >
  							<Link to="/news">News List</Link>
  						</li>
              <li >
  							<Link to="/managepic">Manage Pictrues</Link>
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
