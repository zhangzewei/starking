import React from 'react';
import { Link } from 'react-router';

const ChangeUrl = React.createClass({
  getInitialState() {
    return {
      pic: this.props.params.pic,
    };
  },
  render() {
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
              { this.state.pic === 'add' ? 'Add a New Pictrue' : 'Change ' + this.state.pic }
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <form action="#" className="form-horizontal">
                <div className="control-group">
									<label className="control-label">{this.state.pic}</label>
									<div className="controls">
										<input name="img" type="file" className="default span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
                  <div className="controls">
                    <button type="submit" className="btn green" >Change</button>&nbsp;
                    <Link to='/managepic' className="btn" >Cancel</Link>
  								</div>
								</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default ChangeUrl;
