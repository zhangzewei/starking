import React, { Component, PropTypes } from 'react';
import MainInfo from './mainInfo';
import Pics from './pic';
import Video from './video';

class Detail extends Component {
  render() {
    return (
      <div>
        <MainInfo data={this.props.data.maininfo}/>
        <Pics data={this.props.data.pics}/>
        <Video data={this.props.data.videos}/>
      </div>
    );
  }
}

export default Detail;
