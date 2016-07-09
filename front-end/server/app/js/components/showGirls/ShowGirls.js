import React, { Component, PropTypes } from 'react';
import Girls from './Girls';
// import DoReply from '../containers/DoReply'

class ShowGirls extends Component {

  render() {
    return (
      <div className="row">
        <Girls data={this.props.data}/>
      </div>
    );
  }
}

export default ShowGirls;
