webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Header = __webpack_require__(159);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(299);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _girlDetail = __webpack_require__(300);
	
	var _girlDetail2 = _interopRequireDefault(_girlDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	
	var detail = document.getElementById('detail');
	
	var data = {
	  maininfo: {
	    src: 'img/1.jpg',
	    name: 'haha',
	    height: '170',
	    weight: '65',
	    birth: '1995.02.08',
	    age: '21',
	    edu: '大学',
	    hobby: '唱歌，跳舞，等等',
	    exp: 'xxx活动经验等等',
	    intro: '我是xxx像成为美少女明星，我是xxx像成为美少女明星，我是xxx像成为美少女明星，我是xxx像成为美少女明星，我是xxx像成为美少女明星，我是xxx像成为美少女明星，我是xxx像成为美少女明星，'
	  },
	  pics: [{ src: 'img/1.jpg' }, { src: 'img/2.jpg' }, { src: 'img/3.jpg' }, { src: 'img/4.jpg' }, { src: 'img/3.jpg' }, { src: 'img/2.jpg' }],
	  videos: [{
	    'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
	    'src': 'img/111.png',
	    'name': 'hahahh'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
	    'src': 'img/222.png',
	    'name': 'vcvvaasd'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
	    'src': 'img/333.png',
	    'name': 'asdasdasda'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
	    'src': 'img/111.png',
	    'name': 'hahahh'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
	    'src': 'img/222.png',
	    'name': 'vcvvaasd'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
	    'src': 'img/333.png',
	    'name': 'asdasdasda'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
	    'src': 'img/111.png',
	    'name': 'hahahh'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
	    'src': 'img/222.png',
	    'name': 'vcvvaasd'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
	    'src': 'img/333.png',
	    'name': 'asdasdasda'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
	    'src': 'img/111.png',
	    'name': 'hahahh'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
	    'src': 'img/222.png',
	    'name': 'vcvvaasd'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
	    'src': 'img/333.png',
	    'name': 'asdasdasda'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTYzMDkxMDU0NA==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
	    'src': 'img/111.png',
	    'name': 'hahahh'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTU5MDk5MjI4NA==.html?from=y1.2-2-97.3.2-1.1-3-1-1-0',
	    'src': 'img/222.png',
	    'name': 'vcvvaasd'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
	    'src': 'img/333.png',
	    'name': 'asdasdasda'
	  }, {
	    'link': 'http://v.youku.com/v_show/id_XMTQ5NDc5MDQzMg==.html',
	    'src': 'img/333.png',
	    'name': 'asdasdasda'
	  }]
	};
	function renderHeader() {
	  _reactDom2.default.render(_react2.default.createElement(_Header2.default, null), header);
	};
	
	function renderDetail() {
	  _reactDom2.default.render(_react2.default.createElement(_girlDetail2.default, { data: data }), detail);
	};
	
	function renderFooter() {
	  _reactDom2.default.render(_react2.default.createElement(_Footer2.default, null), footer);
	};
	renderHeader();
	renderDetail();
	renderFooter();

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(161);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mainInfo = __webpack_require__(301);
	
	var _mainInfo2 = _interopRequireDefault(_mainInfo);
	
	var _pic = __webpack_require__(302);
	
	var _pic2 = _interopRequireDefault(_pic);
	
	var _video = __webpack_require__(304);
	
	var _video2 = _interopRequireDefault(_video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  Detail: {
	    displayName: 'Detail'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/home/zhangzewei/projects/starking/front-end/server/app/js/components/girlDetail/girlDetail.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var Detail = _wrapComponent('Detail')(function (_Component) {
	  _inherits(Detail, _Component);
	
	  function Detail() {
	    _classCallCheck(this, Detail);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Detail).apply(this, arguments));
	  }
	
	  _createClass(Detail, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement(_mainInfo2.default, { data: this.props.data.maininfo }),
	        _react3.default.createElement(_pic2.default, { data: this.props.data.pics }),
	        _react3.default.createElement(_video2.default, { data: this.props.data.videos })
	      );
	    }
	  }]);
	
	  return Detail;
	}(_react2.Component));
	
	exports.default = Detail;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(161);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  mainInfo: {
	    displayName: "mainInfo"
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: "/home/zhangzewei/projects/starking/front-end/server/app/js/components/girlDetail/mainInfo.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	// import rankItems from './rankItems'
	
	var mainInfo = _wrapComponent("mainInfo")(function (_Component) {
	  _inherits(mainInfo, _Component);
	
	  function mainInfo() {
	    _classCallCheck(this, mainInfo);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(mainInfo).apply(this, arguments));
	  }
	
	  _createClass(mainInfo, [{
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement(
	        "section",
	        null,
	        _react3.default.createElement(
	          "div",
	          { className: "container" },
	          _react3.default.createElement(
	            "div",
	            { className: "row" },
	            _react3.default.createElement(
	              "h3",
	              null,
	              "详细信息"
	            ),
	            _react3.default.createElement("div", { className: "divide" }),
	            _react3.default.createElement(
	              "div",
	              { className: "col m4 s12" },
	              _react3.default.createElement("img", { className: "materialboxed", "data-caption": "this is one girl", width: "300", src: this.props.data.src })
	            ),
	            _react3.default.createElement(
	              "div",
	              { className: "col m8 s12" },
	              _react3.default.createElement(
	                "h4",
	                null,
	                this.props.data.name
	              ),
	              _react3.default.createElement(
	                "ul",
	                { className: "collection" },
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "身高:",
	                  this.props.data.height,
	                  "cm"
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "体重:",
	                  this.props.data.weight,
	                  "kg"
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "出生日期:",
	                  this.props.data.birth
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "年龄:",
	                  this.props.data.age
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "学历:",
	                  this.props.data.edu
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "兴趣爱好:",
	                  this.props.data.hobby
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "活动经验:",
	                  this.props.data.exp
	                ),
	                _react3.default.createElement(
	                  "li",
	                  { className: "collection-item" },
	                  "自我介绍:",
	                  _react3.default.createElement(
	                    "p",
	                    null,
	                    this.props.data.intro
	                  )
	                ),
	                _react3.default.createElement(
	                  "a",
	                  { href: "rank.html", className: "vote waves-effect waves-light btn" },
	                  "支持她"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return mainInfo;
	}(_react2.Component));
	
	exports.default = mainInfo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(161);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _picItem = __webpack_require__(303);
	
	var _picItem2 = _interopRequireDefault(_picItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  pics: {
	    displayName: 'pics'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/home/zhangzewei/projects/starking/front-end/server/app/js/components/girlDetail/pic.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var pics = _wrapComponent('pics')(function (_Component) {
	  _inherits(pics, _Component);
	
	  function pics() {
	    _classCallCheck(this, pics);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(pics).apply(this, arguments));
	  }
	
	  _createClass(pics, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'section',
	        { className: 'pics' },
	        _react3.default.createElement(
	          'div',
	          { className: 'container' },
	          _react3.default.createElement(
	            'div',
	            { className: 'row' },
	            _react3.default.createElement(
	              'h3',
	              null,
	              '其他照片'
	            ),
	            _react3.default.createElement('div', { className: 'divide' }),
	            _react3.default.createElement(_picItem2.default, { data: this.props.data })
	          )
	        )
	      );
	    }
	  }]);
	
	  return pics;
	}(_react2.Component));
	
	exports.default = pics;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(161);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  picItems: {
	    displayName: "picItems"
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: "/home/zhangzewei/projects/starking/front-end/server/app/js/components/girlDetail/picItem.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var picItems = _wrapComponent("picItems")(function (_Component) {
	  _inherits(picItems, _Component);
	
	  function picItems() {
	    _classCallCheck(this, picItems);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(picItems).apply(this, arguments));
	  }
	
	  _createClass(picItems, [{
	    key: "render",
	    value: function render() {
	      var picitems = this.props.data.map(function (data, index) {
	        return _react3.default.createElement(
	          "div",
	          { className: "col m3 s12 girl-pics", key: index },
	          _react3.default.createElement("img", { className: "materialboxed", width: "300", src: data.src })
	        );
	      });
	      return _react3.default.createElement(
	        "div",
	        null,
	        picitems
	      );
	    }
	  }]);
	
	  return picItems;
	}(_react2.Component));
	
	exports.default = picItems;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(161);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _videoItems = __webpack_require__(305);
	
	var _videoItems2 = _interopRequireDefault(_videoItems);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  videos: {
	    displayName: 'videos'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/home/zhangzewei/projects/starking/front-end/server/app/js/components/girlDetail/video.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var videos = _wrapComponent('videos')(function (_Component) {
	  _inherits(videos, _Component);
	
	  function videos() {
	    _classCallCheck(this, videos);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(videos).apply(this, arguments));
	  }
	
	  _createClass(videos, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'section',
	        null,
	        _react3.default.createElement(
	          'div',
	          { className: 'container' },
	          _react3.default.createElement(
	            'div',
	            { className: 'row' },
	            _react3.default.createElement(
	              'h3',
	              null,
	              '视频展示'
	            ),
	            _react3.default.createElement('div', { className: 'divide' }),
	            _react3.default.createElement(
	              'div',
	              { className: 'col s12' },
	              _react3.default.createElement(_videoItems2.default, { data: this.props.data })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return videos;
	}(_react2.Component));
	
	exports.default = videos;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(161);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  videoItems: {
	    displayName: "videoItems"
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: "/home/zhangzewei/projects/starking/front-end/server/app/js/components/girlDetail/videoItems.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var videoItems = _wrapComponent("videoItems")(function (_Component) {
	  _inherits(videoItems, _Component);
	
	  function videoItems() {
	    _classCallCheck(this, videoItems);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(videoItems).apply(this, arguments));
	  }
	
	  _createClass(videoItems, [{
	    key: "render",
	    value: function render() {
	      var videoitems = this.props.data.map(function (data, index) {
	        return _react3.default.createElement(
	          "div",
	          { className: "col s12 m3", key: index },
	          _react3.default.createElement(
	            "div",
	            { className: "card" },
	            _react3.default.createElement(
	              "div",
	              { className: "card-image" },
	              _react3.default.createElement(
	                "a",
	                { href: data.link, target: "_blank" },
	                _react3.default.createElement("img", { src: data.src })
	              )
	            ),
	            _react3.default.createElement(
	              "div",
	              { className: "card-action" },
	              _react3.default.createElement(
	                "a",
	                { href: data.link, target: "_blank" },
	                data.name
	              )
	            )
	          )
	        );
	      });
	      return _react3.default.createElement(
	        "div",
	        null,
	        videoitems
	      );
	    }
	  }]);
	
	  return videoItems;
	}(_react2.Component));
	
	exports.default = videoItems;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ }

});
//# sourceMappingURL=girldetail.js.map