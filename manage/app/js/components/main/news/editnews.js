import React from 'react';
import { Link } from 'react-router';

const editnews = React.createClass({
  getInitialState() {
    return {
      name: this.props.params.name,
    };
  },
  render() {
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
                Edit News
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <form action="#" className="form-horizontal">
                <div className="control-group">
									<label className="control-label">News Ttile</label>
									<div className="controls">
										<input name="height" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
                  <div className="controls">
                    <button type="submit" className="btn green" >Change</button>
                    <Link to='/news' className="btn" >Cancel</Link>
  								</div>
								</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default editnews;
