import React, { Component, PropTypes } from 'react';
// import rankItems from './rankItems'

class mainInfo extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="row">
              <h3>详细信息</h3><div className="divide"></div>
              <div className="col m4 s12">
                <img className="materialboxed" data-caption="this is one girl" width="300" src={this.props.data.src} />
              </div>
              <div className="col m8 s12">
                <h4>{this.props.data.name}</h4>
                <ul className="collection">
                  <li className="collection-item">身高:{this.props.data.height}cm</li>
                  <li className="collection-item">体重:{this.props.data.weight}kg</li>
                  <li className="collection-item">出生日期:{this.props.data.birth}</li>
                  <li className="collection-item">年龄:{this.props.data.age}</li>
                  <li className="collection-item">学历:{this.props.data.edu}</li>
                  <li className="collection-item">兴趣爱好:{this.props.data.hobby}</li>
                  <li className="collection-item">活动经验:{this.props.data.exp}</li>
                  <li className="collection-item">自我介绍:<p>{this.props.data.intro}</p></li>
                  <a href="rank.html" className="vote waves-effect waves-light btn">支持她</a>
                </ul>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default mainInfo;
