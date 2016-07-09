import React, { Component, PropTypes } from 'react';
// import rankItems from './rankItems'

class Rank extends Component {
  render() {
    const rankItems = this.props.data.map(function (rank, index){
      return (
        <li className="collection-item avatar" key={index}>
          <img src={rank.src} alt="" className="circle"/>
          <a href="girl-detail.html" className="title">{rank.name}</a>
          <p className="secondary-content">{index + 1}</p>
        </li>
      )
    });
    return (
      <ul className="collection">
        {rankItems}
      </ul>
    );
  }
}

export default Rank;
