"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledEmailComponents = require("styled-email-components");

var _styledEmailComponents2 = _interopRequireDefault(_styledEmailComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cell = _styledEmailComponents2.default.td`
  padding: 16px;
`;

function StyledTableCell({
  children,
  ...props
}) {
  return _react2.default.createElement(Cell, props, children);
}

exports.default = StyledTableCell;