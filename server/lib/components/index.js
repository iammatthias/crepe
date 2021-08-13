"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _tableRow = require("./table-row");

var _tableRow2 = _interopRequireDefault(_tableRow);

var _tableCell = require("./table-cell");

var _tableCell2 = _interopRequireDefault(_tableCell);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const components = {
  Table: props => _react2.default.createElement(_table2.default, props),
  Row: props => _react2.default.createElement(_tableRow2.default, props),
  Cell: props => _react2.default.createElement(_tableCell2.default, props),
  Button: props => _react2.default.createElement(_button2.default, props)
};
exports.default = components;