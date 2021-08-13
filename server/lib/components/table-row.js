"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledEmailComponents = require("styled-email-components");

var _styledEmailComponents2 = _interopRequireDefault(_styledEmailComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Row = _styledEmailComponents2.default.tr``;

function StyledTableRow({
  children,
  ...props
}) {
  return _react2.default.createElement(Row, props, children);
}

exports.default = StyledTableRow;