import React from 'react';
import { Link } from 'react-router';

const ShowPics = React.createClass({
  render() {
    const pics = this.props.data.map((img, index) => {
      return (
        <div className="span3" key={index}>
          <div className="item">
            <a className="fancybox-button" data-rel="fancybox-button" title="Photo" href={img.url} >
              <div className="zoom">
                <img src={img.url} alt="Photo" />
                <div className="zoom-icon"></div>
              </div>
            </a>
          </div>
        </div>
      )
    });
    return (
      <div className="row-fluid">
        {pics}
      </div>
    )
  }
});

const ShowVids = React.createClass({
  render() {
    const vids = this.props.data.map((vid, index) => {
      return (
        <li  key={index}><span>{vid.name}:</span><a href={vid.url} target="blank">{vid.url}</a></li>
      )
    });
    return (
      <div className="row-fluid">
        <div className="span12 profile-classic">
          <h3 className="page-title">
            Video Links
          </h3>
          <ul className="unstyled span12">
            {vids}
          </ul>
        </div>
      </div>
    )
  }
});

const girlInfo = React.createClass({
  getInitialState() {
    return {
      data: {
        name: this.props.params.name,
        imgs:[
          {url: 'app/image/image1.jpg'},
          {url: 'app/image/image2.jpg'},
          {url: 'app/image/image3.jpg'},
          {url: 'app/image/image4.jpg'},
        ],
        vids: [
          {
            name: '1111',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
          {
            name: '222',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
          {
            name: '3333',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
          {
            name: '4444',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
          {
            name: '1111',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
          {
            name: '1111',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
          {
            name: '1111',
            url: 'http://v.youku.com/v_show/id_XMTYxNjU5Mzk4MA==.html',
          },
        ]
      }
    };
  },
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
                {this.props.params.name}'s Information
                <small><Link to="/girlslist">back</Link></small>
              </h3>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12 profile-classic">
							<ul className="unstyled span12">
								<li>
                  <span>Height:</span>
                  170CM
                </li>
								<li>
                  <span>Weight:</span>
                  60KG
                </li>
								<li>
                  <span>Birthday:</span>
                  1995.02.08
                </li>
								<li>
                  <span>Age:</span>
                  21
                </li>
								<li>
                  <span>Education:</span>
                  ....
                </li>
                <li>
                  <span>Updated Media Material:</span>
                  ....
                </li>
							</ul>
            </div>
          </div>
          <ShowPics data={this.state.data.imgs} />
          <ShowVids data={this.state.data.vids} />
          <div className="row-fluid">
            <div className="span12 profile-classic">
              <div className="btn-group pull-right">
                <Link to={`/changeinfo/${this.state.data.name}`} className="btn green">change</Link>
                <Link to="/girlslist" className="btn">back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default girlInfo;
