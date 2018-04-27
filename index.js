'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScopeConsumer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$createContext = _react2.default.createContext({
  scope: 'default',
  node: document.body
}),
    Provider = _React$createContext.Provider,
    ScopeConsumer = _React$createContext.Consumer;

var Scope = function (_Component) {
  _inherits(Scope, _Component);

  function Scope(props) {
    _classCallCheck(this, Scope);

    var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Scope, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          children = _props.children;
      var node = this.state.node;

      return _react2.default.createElement(
        Provider,
        { value: { scope: name, node: node } },
        _react2.default.createElement(
          'div',
          { className: name },
          children,
          _react2.default.createElement('div', { ref: function ref(el) {
              if (!node && el) {
                _this2.setState({ node: el });
              }
            } })
        )
      );
    }
  }]);

  return Scope;
}(_react.Component);

Scope.propTypes = {
  name: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};
exports.default = Scope;
exports.ScopeConsumer = ScopeConsumer;
