"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tableStyle = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0'
  },
  td: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    border: '0',
    textAlign: 'left'
  }
};

function Header({
  width,
  align,
  direction,
  children,
  className,
  bgcolor,
  style = {}
}) {
  return _react2.default.createElement("th", {
    width: width,
    dir: direction,
    align: align,
    bgcolor: bgcolor,
    style: { ...tableStyle.td,
      ...style
    },
    className: className
  }, children);
}

function Cell({
  width,
  align,
  direction,
  children,
  className,
  bgcolor,
  background,
  style = {}
}) {
  return _react2.default.createElement("td", {
    width: width,
    dir: direction,
    align: align,
    bgcolor: bgcolor,
    background: background,
    style: { ...tableStyle.td,
      ...style
    },
    className: className
  }, children);
}

function Spacer({
  width,
  align,
  direction,
  children,
  className,
  bgcolor,
  height,
  style = {}
}) {
  return _react2.default.createElement("td", {
    width: width,
    height: height,
    dir: direction,
    align: align,
    bgcolor: bgcolor,
    style: { ...tableStyle.td,
      ...style
    },
    className: className
  }, children);
}

function Row({
  width,
  children,
  className,
  valign,
  align,
  style = {}
}) {
  return _react2.default.createElement("tr", {
    width: width,
    className: className,
    valign: valign,
    align: align,
    style: style
  }, _react2.default.Children.map(children, el => {
    return el;
  }));
}

function Grid({
  direction,
  className,
  children,
  bgcolor,
  background,
  style = {}
}) {
  return _react2.default.createElement("table", {
    dir: direction,
    style: { ...tableStyle.table,
      ...style
    },
    className: className,
    bgcolor: bgcolor,
    background: "",
    border: "0",
    cellSpacing: "0",
    cellPadding: "0"
  }, _react2.default.createElement("tbody", null, _react2.default.Children.map(children, el => {
    if (!el) return;
    if (el.type === Row) return el;

    if (el.type === Cell) {
      return _react2.default.createElement("tr", null, el);
    }

    if (el.type === Header) {
      return _react2.default.createElement("tr", null, el);
    }

    if (el.type === Spacer) {
      return _react2.default.createElement("tr", null, el);
    }

    return _react2.default.createElement("tr", null, _react2.default.createElement("td", {
      style: { ...tableStyle.td
      }
    }, el));
  })));
}

Grid.Row = Row;
Grid.Cell = Cell;
Grid.Header = Header;
Grid.Spacer = Spacer;
exports.default = Grid;