import React, { Component, PropTypes } from 'react';

class login extends Component {
  render() {
    return (
      <div className="modal my-modal logoin">
  	    <div className="modal-content">
	      	<h4>登录</h4>
	        <div className="row">
	          <form className="col s12">
	            <div className="row">
	              <div className="input-field col s12">
	                <input type="text" className="validate"/>
	                <label htmlFor="first_name">账号</label>
	              </div>
	            </div>
	            <div className="row">
	              <div className="input-field col s12">
	                <input type="password" className="validate"/>
	                <label htmlFor="password">密码</label>
	              </div>
	            </div>
        	    <div className="modal-footer">
        	      <button type="submit" className="right waves-effect waves-light btn">登录</button>
                  <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
        	    </div>
	          </form>
	        </div>
  		  </div>
  		</div>
    );
  }
}

export default login;
