import React from 'react';

const tables = React.createClass({
  getInitialState() {
    return {
      data: this.props.data,
      type: this.props.type,
    };
  },
  render() {
    const pics = this.state.data.map((data, index) => {
      return (
        <tr className="odd gradeX" key={index}>
          <td className="hidden"><input type="checkbox" className="checkboxes" value="1" /></td>
          <td>{index + 1}</td>
          <td><a href={data.url} target="blank">{data.name}</a></td>
          <td>{data.url}</td>
          <td>{data.date}</td>
          <td>
            <button className="btn red">delete</button>
          </td>
        </tr>
      )
    });
    const vids = this.state.data.map((data, index) => {
      return (
        <tr className="odd gradeX" key={index}>
          <td className="hidden"><input type="checkbox" className="checkboxes" value="1" /></td>
          <td>{index + 1}</td>
          <td><a href={data.url} target="blank">{data.name}</a></td>
          <td><a href={data.imgurl} target="blank">imgUrl</a></td>
          <td>{data.date}</td>
          <td>
            <button className="btn red">delete</button>
          </td>
        </tr>
      )
    });
    return (
      <tbody>
        {this.state.type === 0 ? pics : vids}
      </tbody>
    );
  }
})

export default tables;
