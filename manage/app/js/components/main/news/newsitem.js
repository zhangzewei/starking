import React from 'react';
import { Link } from 'react-router';

const newsitems = React.createClass({
  getInitialState() {
    return {
      data: this.props.data
    }
  },
  render() {
    const newslists = this.state.data.map((data, index) => {
      return (
        <tr className="odd gradeX" key={index}>
          <td className="hidden"><input type="checkbox" className="checkboxes" value="1" /></td>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.time}</td>
          <td>{data.author}</td>
          <td>
            <Link className="btn green" to={`/editnews/${data.name}`}>Edit</Link>
            &nbsp;
            <button className="btn red">delete</button>
          </td>
        </tr>
      )
    });
    return (
      <tbody>
        {newslists}
      </tbody>
    );
  }
})

export default newsitems;
