import React from 'react';
import ManageTable from './datatable/datatable';
import { Link } from 'react-router';

const changeGirlInfo = React.createClass({
  getInitialState() {
    return {
      name: this.props.params.name,
      imgs: [
        {
          name: '123',
          url: '321321',
          date: '3321321',
        },
        {
          name: '2d2d2d',
          url: '22222',
          date: '4334333',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
        },
      ],
      vids: [
        {
          name: '123',
          url: '321321',
          date: '3321321',
          imgurl: '13213213',
        },
        {
          name: '2d2d2d',
          url: '22222',
          date: '4334333',
          imgurl: '13213213',
        },
        {
          name: '22233333',
          url: '22333333',
          date: '3333333333',
          imgurl: '13213213',
        },
      ],
    };
  },
  render() {
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
                girl name <small>change the girl's information</small>
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <form action="#" className="form-horizontal">
                <div className="control-group">
									<label className="control-label">Height</label>
									<div className="controls">
										<input name="height" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Weight</label>
									<div className="controls">
										<input name="weight" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Birthday</label>
									<div className="controls">
										<input name="birthday" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Age</label>
									<div className="controls">
										<input name="age" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Education</label>
									<div className="controls">
										<input name="education" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Hobby</label>
									<div className="controls">
										<input name="hobby" type="text" value="" className="span6 m-wrap" />
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Experience</label>
									<div className="controls">
										<textarea name="experience" type="text" value="" className="span6 m-wrap"></textarea>
									</div>
								</div>
                <div className="control-group">
									<label className="control-label">Introduce</label>
									<div className="controls">
										<textarea name="introduce" type="text" value="" className="span6 m-wrap"></textarea>
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
          <ManageTable data={this.state.imgs} type={0} name={this.state.name}/>
          <ManageTable data={this.state.vids} type={1} name={this.state.name}/>
        </div>
      </div>
    );
  }
})

export default changeGirlInfo;
