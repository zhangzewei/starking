import React, { Component, PropTypes } from 'react';

const header = React.createClass({
  render() {
    return (
  <div className="header navbar navbar-inverse navbar-fixed-top">
		<div className="navbar-inner">
			<div className="container-fluid">
				<a className="brand" href="index.html">
				<img src="app/image/logo.png" alt="logo" />
				</a>
				<a href="javascript:;" className="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
				<img src="app/image/menu-toggler.png" alt="" />
				</a>
				<ul className="nav pull-right">
					<li className="dropdown user">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
						<img alt="" src="app/image/avatar1_small.jpg" />
						<span className="username">Bob Nilson</span>
						<i className="icon-angle-down"></i>
						</a>
						<ul className="dropdown-menu">
							<li><a href="extra_profile.html"><i className="icon-user"></i> My Profile</a></li>
							<li><a href="page_calendar.html"><i className="icon-calendar"></i> My Calendar</a></li>
							<li><a href="inbox.html"><i className="icon-envelope"></i> My Inbox(3)</a></li>
							<li><a href="#"><i className="icon-tasks"></i> My Tasks</a></li>
							<li className="divider"></li>
							<li><a href="extra_lock.html"><i className="icon-lock"></i> Lock Screen</a></li>
							<li><a href="login.html"><i className="icon-key"></i> Log Out</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
    );
  }
})

export default header;
