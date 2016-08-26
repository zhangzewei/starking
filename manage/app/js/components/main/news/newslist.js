import React from 'react';
import { Link } from 'react-router';
import NewsItem from './newsitem';

const newslist = React.createClass({
  getInitialState: function() {
      return { data: [
        {
          name: 'qwe',
          time: '2016-7-12',
          author: 'zzw',
        },
        {
          name: 'qwe',
          time: '2016-7-12',
          author: 'zzw',
        },
        {
          name: 'qwe',
          time: '2016-7-12',
          author: 'zzw',
        },
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
                NewsList
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <div className="portlet box light-grey">
                <div className="portlet-title">
                  <div className="caption"><i className="icon-globe"></i>NewsList Table</div>
                </div>
                <div className="portlet-body">
                  <div className="clearfix">
                    <div className="btn-group">
                      <Link id="sample_editable_1_new" className="btn green" to='/editnews/addnews'>
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
                        <th>Time</th>
                        <th>Author</th>
                        <th>Operating</th>
                      </tr>
                    </thead>
                    <NewsItem data={this.state.data}/>
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

export default newslist;
