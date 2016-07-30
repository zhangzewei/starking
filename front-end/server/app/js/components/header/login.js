import React, { Component, PropTypes } from 'react';

class login extends Component {

  checkLogin(event) {
    const username = $('input[name="loginAccount"]').val();
    const password = $('input[name="loginAccount"]').val();
    if (username != '' && password != '') {
      event.preventDefault();
      const data = {
        username: username,
        password: password
      }
      $.ajax({
        url: 'test.json',
        data: data,
        dataType: 'json',
        type: 'POST'
      }).then((result) => {
        console.log(result);
      }).catch(() => {
        console.log('服务器出错了');
      })
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="modal my-modal login">
  	    <div className="modal-content">
	      	<h4>登录</h4>
	        <div className="row">
	          <form className="col s12">
	            <div className="row">
	              <div className="input-field col s12">
	                <input type="text" name="loginAccount" className="validate" required/>
	                <label htmlFor="first_name">账号</label>
	              </div>
	            </div>
	            <div className="row">
	              <div className="input-field col s12" name="loginPassword">
	                <input type="password" className="validate" required/>
	                <label htmlFor="password">密码</label>
	              </div>
	            </div>
        	    <div className="modal-footer">
        	      <button onClick={(event) => this.checkLogin(event)} className="right waves-effect waves-light btn">登录</button>
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
