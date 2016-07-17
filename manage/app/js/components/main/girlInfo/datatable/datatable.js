import React from 'react';
import Tables from './tables';
import { Link } from 'react-router';

const dataTable = React.createClass({
  getInitialState() {
    return {
      name: this.props.name,
      data: this.props.data,
      type: this.props.type,
    };
  },
  componentDidMount() {
    TableManaged.init();
  },
  render() {
    return (
      <div className="row-fluid">
        <h2 className="page-title">Manage {this.state.type === 0 ? 'Pictrues' : 'Videos'}</h2>
        <div className="span12">
          <div className="portlet box light-grey">
            <div className="portlet-title">
              <div className="caption"><i className="icon-globe"></i>{this.state.type === 0 ? 'Pictrues' : 'Videos'} Table</div>
            </div>
            <div className="portlet-body">
              <div className="clearfix">
                <div className="btn-group">
                  <Link to={`/addurl/${this.state.name}/${this.state.type}`} className="btn green">
                  Add New <i className="icon-plus"></i>
                  </Link>
                </div>
              </div>
              <table className="table table-striped table-bordered table-hover sample_1" >
                <thead>
                  <tr>
                    <th className="hidden"><input type="checkbox" className="group-checkable" data-set='.sample_1 .checkboxes' /></th>
                    <th>Num</th>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Add Date</th>
                    <th>Operating</th>
                  </tr>
                </thead>
                <Tables data={this.state.data} type={this.state.type}/>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default dataTable;
