"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledEmailComponents = require("styled-email-components");

var _styledEmailComponents2 = _interopRequireDefault(_styledEmailComponents);

var _reactHtmlComment = require("react-html-comment");

var _reactHtmlComment2 = _interopRequireDefault(_reactHtmlComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Button = _styledEmailComponents2.default.a`
  background-color: #2a2b2b;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  padding: 24px 20px;
  color: #ffffff;
  border-radius: 4px;
  display: inline-block;
  min-width: 160px;
  miso-padding-alt: 0;
  span {
    mso-text-raise: 15pt;
  }
`;

function StyledTable({
  href,
  children,
  ...props
}) {
  return _react2.default.createElement(Button, _extends({
    href: href
  }, props, {
    dangerouslySetInnerHTML: {
      __html: `<!--[if mso]><i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i><![endif]-->
          <span>${children}</span>
          <!--[if mso]><i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i><![endif]-->`
    }
  }));
}

exports.default = StyledTable;