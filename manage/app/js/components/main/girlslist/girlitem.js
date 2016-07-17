import React from 'react';
import { Link } from 'react-router';

const girlitem = React.createClass({
  getInitialState() {
    return {
      data: this.props.data
    }
  },
  render() {
    const girlslists = this.state.data.map((data, index) => {
      return (
        <tr className="odd gradeX" key={index}>
          <td className="hidden"><input type="checkbox" className="checkboxes" value="1" /></td>
          <td>{index + 1}</td>
          <td><Link to={`/girldetail/${data.name}`}>{data.name}</Link></td>
          <td>{data.vote}</td>
          <td>{data.joined}</td>
          <td></td>
        </tr>
      )
    });
    return (
      <tbody>
        {girlslists}
      </tbody>
    );
  }
})

export default girlitem;
