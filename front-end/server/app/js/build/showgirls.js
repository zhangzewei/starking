webpackJsonp([3],{

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
	
	var _ShowGirls = __webpack_require__(320);
	
	var _ShowGirls2 = _interopRequireDefault(_ShowGirls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	
	var showGirls = document.getElementById('show-girls');
	
	var data = [{
	  src: 'img/1.jpg',
	  name: 'name1',
	  vote: '33'
	}, {
	  src: 'img/2.jpg',
	  name: 'name2',
	  vote: '12'
	}, {
	  src: 'img/3.jpg',
	  name: 'name3',
	  vote: '55'
	}, {
	  src: 'img/4.jpg',
	  name: 'name4',
	  vote: '66'
	}];
	
	function renderHeader() {
	  _reactDom2.default.render(_react2.default.createElement(_Header2.default, null), header);
	};
	
	function renderShowGirls() {
	  _reactDom2.default.render(_react2.default.createElement(_ShowGirls2.default, { data: data }), showGirls);
	};
	
	function renderFooter() {
	  _reactDom2.default.render(_react2.default.createElement(_Footer2.default, null), footer);
	};
	renderHeader();
	renderShowGirls();
	renderFooter();

/***/ },

/***/ 320:
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
	
	var _Girls = __webpack_require__(321);
	
	var _Girls2 = _interopRequireDefault(_Girls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  ShowGirls: {
	    displayName: 'ShowGirls'
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/home/zhangzewei/projects/starking/front-end/server/app/js/components/showGirls/ShowGirls.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	// import DoReply from '../containers/DoReply'
	
	var ShowGirls = _wrapComponent('ShowGirls')(function (_Component) {
	  _inherits(ShowGirls, _Component);
	
	  function ShowGirls() {
	    _classCallCheck(this, ShowGirls);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowGirls).apply(this, arguments));
	  }
	
	  _createClass(ShowGirls, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'row' },
	        _react3.default.createElement(_Girls2.default, { data: this.props.data })
	      );
	    }
	  }]);
	
	  return ShowGirls;
	}(_react2.Component));
	
	exports.default = ShowGirls;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ },

/***/ 321:
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
	  Girl: {
	    displayName: "Girl"
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: "/home/zhangzewei/projects/starking/front-end/server/app/js/components/showGirls/Girls.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}
	
	var Girl = _wrapComponent("Girl")(function (_Component) {
	  _inherits(Girl, _Component);
	
	  function Girl() {
	    _classCallCheck(this, Girl);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Girl).apply(this, arguments));
	  }
	
	  _createClass(Girl, [{
	    key: "render",
	    value: function render() {
	      var girlNodes = this.props.data.map(function (girl, index) {
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
	                { href: "girl-detail.html" },
	                _react3.default.createElement("img", { src: girl.src })
	              )
	            ),
	            _react3.default.createElement(
	              "div",
	              { className: "card-action" },
	              _react3.default.createElement(
	                "a",
	                { href: "app/girl-detail.html" },
	                girl.name
	              ),
	              _react3.default.createElement(
	                "div",
	                { className: "right showVote" },
	                _react3.default.createElement("img", { src: "img/heart.png", width: "20" }),
	                _react3.default.createElement(
	                  "span",
	                  { className: "right" },
	                  girl.vote
	                )
	              )
	            )
	          )
	        );
	      });
	      return _react3.default.createElement(
	        "div",
	        null,
	        girlNodes
	      );
	    }
	  }]);
	
	  return Girl;
	}(_react2.Component));
	
	exports.default = Girl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ }

});
//# sourceMappingURL=showgirls.js.map