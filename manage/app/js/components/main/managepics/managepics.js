import React from 'react';
import { Link } from 'react-router';

const managepic = React.createClass({
  componentDidMount() {
    Gallery.init();
  },
  render() {
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

            <div className="span12 profile-classic">
              <div className="span3">
                <div className="item">
                  <a className="fancybox-button" data-rel="fancybox-button" title="LOGO" href='app/image/image1.jpg' >
                    <div className="zoom">
                      <img src='app/image/image1.jpg' alt="Logo" />
                      <div className="zoom-icon"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="control-group span6">
                <label className="control-label">Logo</label>
                <div className="controls">
                  <input name="height" type="text" value="app/image/image1.jpg" className="span6 m-wrap" readOnly/>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <Link className="btn green" to='/changepic/Logo'>Change</Link>
  								</div>
								</div>
              </div>
            </div>

            <div className="span12 profile-classic">
              <div className="span3">
                <div className="item">
                  <a className="fancybox-button" data-rel="fancybox-button" title="Carousel Pictrue 1" href='app/image/image1.jpg' >
                    <div className="zoom">
                      <img src='app/image/image1.jpg' alt="Carousel Pictrue 1" />
                      <div className="zoom-icon"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="control-group span6">
                <label className="control-label">Carousel Pictrue 1</label>
                <div className="controls">
                  <input name="height" type="text" value="app/image/image1.jpg" className="span6 m-wrap" readOnly/>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <Link className="btn green" to='/changepic/Carousel_Pictrue_1'>Change</Link>
  								</div>
								</div>
              </div>
            </div>

            <div className="span12 profile-classic">
              <div className="span3">
                <div className="item">
                  <a className="fancybox-button" data-rel="fancybox-button" title="Carousel Pictrue 2" href='app/image/image1.jpg' >
                    <div className="zoom">
                      <img src='app/image/image1.jpg' alt="Carousel Pictrue 2" />
                      <div className="zoom-icon"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="control-group span6">
                <label className="control-label">Carousel Pictrue 2</label>
                <div className="controls">
                  <input name="height" type="text" value="app/image/image1.jpg" className="span6 m-wrap" readOnly/>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <Link className="btn green" to='/changepic/Carousel_Pictrue_2'>Change</Link>
  								</div>
								</div>
              </div>
            </div>

            <div className="span12 profile-classic">
              <div className="span3">
                <div className="item">
                  <a className="fancybox-button" data-rel="fancybox-button" title="Carousel Pictrue 3" href='app/image/image1.jpg' >
                    <div className="zoom">
                      <img src='app/image/image1.jpg' alt="Carousel Pictrue 3" />
                      <div className="zoom-icon"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="control-group span6">
                <label className="control-label">Carousel Pictrue 3</label>
                <div className="controls">
                  <input name="height" type="text" value="app/image/image1.jpg" className="span6 m-wrap" readOnly/>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <Link className="btn green" to='/changepic/Carousel_Pictrue_3'>Change</Link>
  								</div>
								</div>
              </div>
            </div>

            <div className="span12 profile-classic">
              <div className="span3">
                <div className="item">
                  <a className="fancybox-button" data-rel="fancybox-button" title="Carousel Pictrue 4" href='app/image/image1.jpg' >
                    <div className="zoom">
                      <img src='app/image/image1.jpg' alt="Carousel Pictrue 4" />
                      <div className="zoom-icon"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="control-group span6">
                <label className="control-label">Carousel Pictrue 4</label>
                <div className="controls">
                  <input name="height" type="text" value="app/image/image1.jpg" className="span6 m-wrap" readOnly/>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <Link className="btn green" to='/changepic/Carousel_Pictrue_4'>Change</Link>
  								</div>
								</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default managepic;
