webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {"use strict";
	var React = __webpack_require__(6);
	var _ = __webpack_require__(17);
	var ReactGridLayout = __webpack_require__(15);

	/**
	 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
	 */
	var LocalStorageLayout = module.exports = React.createClass({
	  displayName: "LocalStorageLayout",
	  mixins: [React.addons.PureRenderMixin],

	  getDefaultProps: function () {
	    var ls = {};
	    if (global.localStorage) {
	      try {
	        ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
	      } catch (e) {}
	    }
	    console.log(ls);
	    return {
	      className: "layout",
	      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
	      rowHeight: 30,
	      initialLayouts: ls.layouts || {}
	    };
	  },

	  getInitialState: function () {
	    return {};
	  },

	  componentDidUpdate: function (prevProps, prevState) {
	    this._saveToLocalStorage();
	  },

	  resetLayout: function () {
	    this.setState({ layout: [] });
	  },

	  _saveToLocalStorage: function () {
	    if (global.localStorage) {
	      global.localStorage.setItem("rgl-7", JSON.stringify({
	        layouts: this.state.layouts
	      }));
	    }
	  },

	  onLayoutChange: function (layout, layouts) {
	    console.log(arguments);
	    this.props.onLayoutChange(layout);
	    this.setState({ layout: layout, layouts: layouts });
	  },

	  render: function () {
	    return React.createElement("div", null, React.createElement("button", {
	      onClick: this.resetLayout
	    }, "Reset Layout"), React.createElement(ReactGridLayout, React.__spread({}, this.props, {
	      onLayoutChange: this.onLayoutChange
	    }), React.createElement("div", {
	      key: 1,
	      _grid: { w: 2, h: 3, x: 0, y: 0 }
	    }, React.createElement("span", {
	      className: "text"
	    }, "1")), React.createElement("div", {
	      key: 2,
	      _grid: { w: 2, h: 3, x: 2, y: 0 }
	    }, React.createElement("span", {
	      className: "text"
	    }, "2")), React.createElement("div", {
	      key: 3,
	      _grid: { w: 2, h: 3, x: 4, y: 0 }
	    }, React.createElement("span", {
	      className: "text"
	    }, "3")), React.createElement("div", {
	      key: 4,
	      _grid: { w: 2, h: 3, x: 6, y: 0 }
	    }, React.createElement("span", {
	      className: "text"
	    }, "4")), React.createElement("div", {
	      key: 5,
	      _grid: { w: 2, h: 3, x: 8, y: 0 }
	    }, React.createElement("span", {
	      className: "text"
	    }, "5"))));
	  }
	});

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(16)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(14)(module)))

/***/ }
]);