import React, { Component, PropTypes } from 'react';

class videoItems extends Component {
  render() {
    const videoitems = this.props.data.map(function (data, index){
      return (
        <div className="col s12 m3" key={index}>
          <div className="card">
            <div className="card-image">
              <a href={data.link} target="_blank"><img src={data.src}/></a>
            </div>
            <div className="card-action">
              <a href={data.link} target="_blank">{data.name}</a>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div>
        {videoitems}
      </div>
    );
  }
}

export default videoItems;
