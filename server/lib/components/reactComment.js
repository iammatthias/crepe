"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ReactComment extends _react.Component {
  componentDidMount() {
    let el = _reactDom2.default.findDOMNode(this);

    _reactDom2.default.unmountComponentAtNode(el);

    el.outerHTML = this.createComment();
  }

  createComment() {
    let text = this.props.text;

    if (this.props.trim) {
      text = text.trim();
    }

    return `${text}`;
  }

  render() {
    return _react2.default.createElement("div", null);
  }

}

exports.default = ReactComment;