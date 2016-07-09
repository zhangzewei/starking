import React, { Component, PropTypes } from 'react';

class register extends Component {
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
 		                <input type="text" className="validate" />
 		                <label>账号</label>
 		              </div>
 		            </div>
 		            <div className="row">
 		              <div className="input-field col s12">
 		                <input type="password" className="validate" />
 		                <label>密码</label>
 		              </div>
 		            </div>
 		            <div className="row">
 		              <div className="input-field col s12">
 		                <input type="checkbox" id="checkbox1" />
 		                <label className="checkbox1" htmlFor="checkbox1">确认阅读<a href="#">xxx</a>条款</label>
 		              </div>
 		            </div>
 		          </div>
 		          <div className="modal-footer">
 		            <button type="submit" className="right waves-effect waves-light btn">注册</button>
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
