import React from 'react';
import { Link } from 'react-router';
import GirlItem from './girlitem';

const girlslist = React.createClass({
  getInitialState() {
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
  componentDidMount() {
    TableManaged.init();
  },
  render() {
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
                      <Link id="sample_editable_1_new" className="btn green" to='/changeinfo/newgirl'>
                      Add New <i className="icon-plus"></i>
                      </Link>
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
