import React, { Component, PropTypes } from 'react';

class footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l4 s12">
              <h5 className="white-text">公司地址</h5>
              <p className="grey-text text-lighten-4">
              四川城 成都市 高新区 天府五街中路 美年广场 C座 270-271号 StarKing Entertainment cor
              </p>
            </div>
            <div className="col l8 s12">
              <h5 className="white-text">联系方式</h5>
              <p className="grey-text text-lighten-4">
                TEL：13668158653（高主任）&nbsp;&nbsp;&nbsp;18380458527（刘老师）&nbsp;&nbsp;&nbsp;15608072971（杨老师）&nbsp;&nbsp;&nbsp;15756289858（毛老师）&nbsp;&nbsp;&nbsp;15908165270（尹老师）<br/>
                Email：hwangjeakan@naver.com<br/>
                Wechat：hwangjeakan
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2016 成都斯塔星教育文化有限公司 StarKing Entertainment.
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
