import React, { Component, PropTypes } from 'react';
import PicItems from './picItem';

class pics extends Component {
  render() {
    return (
      <section className="pics">
        <div className="container">
          <div className="row">
            <h3>其他照片</h3><div className="divide"></div>
            <PicItems data={this.props.data}/>
          </div>
        </div>
      </section>
    );
  }
}

export default pics;
