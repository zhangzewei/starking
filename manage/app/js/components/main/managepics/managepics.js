import React from 'react';
import { Link } from 'react-router';

const managepic = React.createClass({
  getInitialState() {
    return (
      this.state = {
        logo: 'app/image/image1.jpg',
        carousels: [
          { src: 'app/image/image1.jpg' },
          { src: 'app/image/image1.jpg' },
          { src: 'app/image/image1.jpg' },
          { src: 'app/image/image1.jpg' },
          { src: 'app/image/image1.jpg' },
        ]
      }
    )
  },
  componentDidMount() {
    Gallery.init();
  },
  shouldAddCarousel(e) {
    // 后台给我一个数据说明有几个图片 最多不能够超过10张
    // e.preventDefault();
    console.log('最多只能够添加10张轮播图片');
  },

  render() {
    const Carousels = this.state.carousels.map((carousel, index) => (
      <div className="span12 profile-classic" key={index}>
        <div className="span3">
          <div className="item">
            <a className="fancybox-button" data-rel="fancybox-button" title={`Carousel Pictrue ${index + 1}`} href={carousel.src} >
              <div className="zoom">
                <img src={carousel.src} alt={`Carousel Pictrue ${index + 1}`} />
                <div className="zoom-icon"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="control-group span6">
          <label className="control-label">{`Carousel Pictrue ${index + 1}`}</label>
          <div className="controls">
            <input name="height" type="text" value={carousel.src} className="span6 m-wrap" readOnly/>
          </div>
          <div className="control-group">
            <div className="controls">
              <Link className="btn green" to={`/changepic/Carousel_Pictrue_${index + 1}`}>Change</Link>&nbsp;
              <Link className="btn red" to='/'>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    ));
    const Logo = (logo) => (
      <div className="span12 profile-classic">
        <div className="span3">
          <div className="item">
            <a className="fancybox-button" data-rel="fancybox-button" title="LOGO" href={logo} >
              <div className="zoom">
                <img src={logo} alt="Logo" />
                <div className="zoom-icon"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="control-group span6">
          <label className="control-label">Logo</label>
          <div className="controls">
            <input name="height" type="text" value={logo} className="span6 m-wrap" readOnly/>
          </div>
          <div className="control-group">
            <div className="controls">
              <Link className="btn green" to='/changepic/Logo'>Change</Link>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="page-content">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12">
              <h3 className="page-title">
                Manage Pictrues
                &nbsp;&nbsp;<Link to="/girlslist">Go Back</Link>
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <h4>Manage Logo Pictrue</h4>
            {Logo(this.state.logo)}
          </div>

          <div className="row-fluid">
            <h4>Manage Carousel Pictrues&nbsp;
              <Link onClick={(e) => this.shouldAddCarousel(e)} className="btn green" to='/changepic/add'>Add a Carousel Pictrue</Link>
            </h4>
            {Carousels}
          </div>

          <div className="row-fluid">
            <h4>Manage Other Pictrues&nbsp;
              <Link onClick={(e) => this.shouldAddCarousel(e)} className="btn green" to='/changepic/add'>Add a Pictrue</Link>
            </h4>
            管理其他页面的图片
          </div>
        </div>
      </div>
    );
  }
});

export default managepic;
