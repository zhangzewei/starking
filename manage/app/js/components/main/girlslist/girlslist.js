import React, { Component, PropTypes } from 'react';
import GirlItem from './girlitem'

const girlslist = React.createClass({
  getInitialState: function() {
      return { data: [
        {
          name: 'qwe',
          joined: '2016-7-12',
          vote: '33'
        },
        {
          name: 'rrr',
          joined: '2016-7-12',
          vote: '66'
        },
        {
          name: 'dddd',
          joined: '2016-7-12',
          vote: '55'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        },
        {
          name: 'gggg',
          joined: '2016-7-12',
          vote: '44'
        }
      ]
    };
  },
  componentDidMount: function() {
    TableManaged.init();
  },
  render: function() {
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
                GirlsList
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <div className="portlet box light-grey">
                <div className="portlet-title">
                  <div className="caption"><i className="icon-globe"></i>GirlsList Table</div>
                </div>
                <div className="portlet-body">
                  <div className="clearfix">
                    <div className="btn-group">
                      <button id="sample_editable_1_new" className="btn green">
                      Add New <i className="icon-plus"></i>
                      </button>
                    </div>
                  </div>
                  <table className="table table-striped table-bordered table-hover sample_1" >
                    <thead>
                      <tr>
                        <th className="hidden"><input type="checkbox" className="group-checkable" data-set=".sample_1 .checkboxes" /></th>
                        <th>Num</th>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Joined</th>
                        <th>Operating</th>
                      </tr>
                    </thead>
                    <GirlItem data={this.state.data}/>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default girlslist;
