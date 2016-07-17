import React from 'react';
import { Link } from 'react-router';

const ChangeUrl = React.createClass({
  getInitialState() {
    return {
      name: this.props.params.name,
      type: this.props.params.type,
    };
  },
  render() {
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
                {this.state.type == 0 ? 'AddImg' : 'AddVideo' } Page
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <form action="#" className="form-horizontal">
                <div className="control-group">
									<label className="control-label">{this.state.type == 0 ? 'AddImg' : 'AddVideoImg' }</label>
									<div className="controls">
										<input name="img" type="file" className="default span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">{this.state.type == 0 ? 'ImgLink' : 'VideoLink' }</label>
									<div className="controls">
										<input name="link" type="text" className="span6 m-wrap" disabled={this.state.type == 0 ? 'disabled' : '' }/>
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">{this.state.type == 0 ? 'ImgName' : 'VideoName' }</label>
									<div className="controls">
										<input name="name" type="text" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
                  <div className="controls">
                    <button type="submit" className="btn green" >change</button>
                    <Link to={`/girldetail/${this.state.name}`} className="btn" >cancel</Link>
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
