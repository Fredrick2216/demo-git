"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// <p> Hello World </p>
var element = _react["default"].createElement('p', null, "Hello World");

var root = _reactDom["default"].createRoot(document.getElementById("root"));

root.render(element);