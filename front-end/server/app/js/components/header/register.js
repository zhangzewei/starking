import React, { Component, PropTypes } from 'react';

class register extends Component {

  checkRegister(event) {
    const username = $('input[name="registerAccount"]').val();
    const password = $('input[name="registerPassword"]').val();
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
      <div className="modal my-modal register">
 		    <div className="modal-content">
 		      <h4>注册</h4>
 		      <div className="row">
 		        <form className="col s12">
 		          <div className="row">
 		           <div className="row">
 		              <div className="input-field col s12">
 		                <input type="text" name="registerAccount" className="validate" required/>
 		                <label>账号</label>
 		              </div>
 		            </div>
 		            <div className="row">
 		              <div className="input-field col s12">
 		                <input type="password" name="registerPassword" className="validate" required/>
 		                <label>密码</label>
 		              </div>
 		            </div>
 		          </div>
 		          <div className="modal-footer">
 		            <button onClick={(event) => this.checkRegister(event)} className="right waves-effect waves-light btn">注册</button>
 		            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">取消</a>
 		          </div>
 		        </form>
 		      </div>
 		    </div>
 		 </div>
   );
  }
}

export default register;
