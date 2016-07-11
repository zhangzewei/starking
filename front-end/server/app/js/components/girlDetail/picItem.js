import React, { Component, PropTypes } from 'react';

class picItems extends Component {
  render() {
    const picitems = this.props.data.map(function (data, index){
      return (
        <div className="col m3 s12 girl-pics" key={index}>
          <img className="materialboxed" width="300" src={data.src}/>
        </div>
      )
    });
    return (
      <div>
        {picitems}
      </div>
    );
  }
}

export default picItems;
