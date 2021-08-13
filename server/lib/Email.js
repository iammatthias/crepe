"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledEmailComponents = require("styled-email-components");

var _styledEmailComponents2 = _interopRequireDefault(_styledEmailComponents);

var _index = require("./components/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Wrapper = _styledEmailComponents2.default.center`
  font-family: sans-serif;
  background: #f7f4f2;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  padding: 16px;
`;
const Content = (0, _styledEmailComponents2.default)(_index2.default.Table)`
  background: #fff;
`;

function Email() {
  return _react2.default.createElement(Wrapper, null, _react2.default.createElement(Content, null, _react2.default.createElement(_index2.default.Row, null, _react2.default.createElement(_index2.default.Cell, null, "foo", _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement(_index2.default.Button, {
    href: "https://tornado.com/"
  }, "Button")))));
}

exports.default = Email;