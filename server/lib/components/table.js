"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledEmailComponents = require("styled-email-components");

var _styledEmailComponents2 = _interopRequireDefault(_styledEmailComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Table = _styledEmailComponents2.default.table`
  margin: 0 auto;
  width: 600px;
`;

function StyledTable({
  children,
  ...props
}) {
  return _react2.default.createElement(Table, props, _react2.default.createElement("tbody", null, children));
}

exports.default = StyledTable;