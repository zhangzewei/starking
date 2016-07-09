webpackJsonp([2],{

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
	
	var _Rank = __webpack_require__(319);
	
	var _Rank2 = _interopRequireDefault(_Rank);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	
	var rank = document.getElementById('rank');
	var data = [{
	  src: 'img/1.jpg',
	  name: 'name1'
	}, {
	  src: 'img/1.jpg',
	  name: 'name1'
	}, {
	  src: 'img/1.jpg',
	  name: 'name1'
	}, {
	  src: 'img/1.jpg',
	  name: 'name1'
	}];
	function renderHeader() {
	  _reactDom2.default.render(_react2.default.createElement(_Header2.default, null), header);
	};
	
	function renderRank() {
	  _reactDom2.default.render(_react2.default.createElement(_Rank2.default, { data: data }), rank);
	};
	
	function renderFooter() {
	  _reactDom2.default.render(_react2.default.createElement(_Footer2.default, null), footer);
	};
	renderHeader();
	renderRank();
	renderFooter();

/***/ },

/***/ 319:
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
	  Rank: {
	    displayName: "Rank"
	  }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: "/home/zhangzewei/projects/starking/front-end/server/app/js/components/rank/Rank.js",
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
	
	var Rank = _wrapComponent("Rank")(function (_Component) {
	  _inherits(Rank, _Component);
	
	  function Rank() {
	    _classCallCheck(this, Rank);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rank).apply(this, arguments));
	  }
	
	  _createClass(Rank, [{
	    key: "render",
	    value: function render() {
	      var rankItems = this.props.data.map(function (rank, index) {
	        return _react3.default.createElement(
	          "li",
	          { className: "collection-item avatar", key: index },
	          _react3.default.createElement("img", { src: rank.src, alt: "", className: "circle" }),
	          _react3.default.createElement(
	            "a",
	            { href: "girl-detail.html", className: "title" },
	            rank.name
	          ),
	          _react3.default.createElement(
	            "p",
	            { className: "secondary-content" },
	            index + 1
	          )
	        );
	      });
	      return _react3.default.createElement(
	        "ul",
	        { className: "collection" },
	        rankItems
	      );
	    }
	  }]);
	
	  return Rank;
	}(_react2.Component));
	
	exports.default = Rank;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module)))

/***/ }

});
//# sourceMappingURL=rank.js.map