webpackJsonp([11],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(10);
	var _ = __webpack_require__(13);
	var WidthProvider = __webpack_require__(3).WidthProvider;
	var ReactGridLayout = __webpack_require__(3);
	ReactGridLayout = WidthProvider(ReactGridLayout);

	/**
	 * This layout demonstrates how to use the `onResize` handler to enforce a min/max width and height.
	 *
	 * In this grid, all elements are allowed a max width of 2 if the height < 3,
	 * and a min width of 2 if the height >= 3.
	 */
	var DynamicMinMaxLayout = React.createClass({
	  displayName: 'DynamicMinMaxLayout',

	  mixins: [PureRenderMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isDraggable: true,
	      isResizable: true,
	      items: 20,
	      rowHeight: 30,
	      cols: 12
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {};
	  },
	  generateDOM: function generateDOM() {
	    // Generate items with properties from the layout, rather than pass the layout directly
	    var layout = this.generateLayout();
	    return _.map(layout, function (l) {
	      return _jsx('div', {
	        _grid: l
	      }, l.i, _jsx('span', {
	        className: 'text'
	      }, void 0, l.i));
	    });
	  },
	  generateLayout: function generateLayout() {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var w = _.random(1, 2);
	      var h = _.random(1, 3);
	      return {
	        x: i * 2 % 12, y: Math.floor(i / 6), w: w, h: h, i: i.toString()
	      };
	    });
	  },


	  onLayoutChange: function onLayoutChange(layout) {
	    this.props.onLayoutChange(layout);
	  },

	  onResize: function onResize(layout, oldLayoutItem, layoutItem, placeholder, e) {
	    // `oldLayoutItem` contains the state of the item before the resize.
	    // You can modify `layoutItem` to enforce constraints.

	    if (layoutItem.h < 3 && layoutItem.w > 2) {
	      layoutItem.w = 2;
	      placeholder.w = 2;
	    }

	    if (layoutItem.h >= 3 && layoutItem.w < 2) {
	      layoutItem.w = 2;
	      placeholder.w = 2;
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      ReactGridLayout,
	      _extends({ onLayoutChange: this.onLayoutChange, onResize: this.onResize
	      }, this.props),
	      this.generateDOM()
	    );
	  }
	});

	module.exports = DynamicMinMaxLayout;

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(9)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }
]);