import React, { Component, PropTypes } from 'react';
import VideoItems from './videoItems';
class videos extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <h3>视频展示</h3>
            <div className="divide"></div>
            <div className="col s12">
              <VideoItems data={this.props.data}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default videos;
