import React from 'react';

const dashboard = React.createClass({
  render() {
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
                Blank Page <small>blank page</small>
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              Blank page content goes here
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default dashboard;
