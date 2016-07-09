import React, { Component, PropTypes }from 'react';

class Girl extends Component {

  render() {
    const girlNodes = this.props.data.map(function (girl, index) {
        return (
          <div className="col s12 m3" key={index}>
            <div className="card">
              <div className="card-image">
                <a href="girl-detail.html"><img src={girl.src}/></a>
              </div>
              <div className="card-action">
                <a href="app/girl-detail.html">{girl.name}</a>
                <div className="right showVote">
                  <img src="img/heart.png" width="20"/><span className="right">{girl.vote}</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    return (
      <div>
        {girlNodes}
      </div>
    );
  }
}

export default Girl;
