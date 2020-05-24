"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &.full-height{\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        >div{\n          flex:1;\n          overflow-y: auto;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//import './ReduxTabsStyle';
var ReduxTabsStyled = _styledComponents.default.div(_templateObject());

var ReduxTabs = /*#__PURE__*/function (_Component) {
  _inherits(ReduxTabs, _Component);

  var _super = _createSuper(ReduxTabs);

  function ReduxTabs() {
    var _this;

    _classCallCheck(this, ReduxTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClickTab", function (n, e) {
      _this.props.onClick(n, _assertThisInitialized(_this));

      e.preventDefault();
    });

    return _this;
  }

  _createClass(ReduxTabs, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var p = this.props;

      if (p && p.children) {
        var liBase = 'nav-' + (p.bs4 ? 'item' : 'link') + ' ';
        var aBase = p.bs4 ? 'nav-link' : '';

        if (p.children instanceof Array) {
          return p.children.map(function (c, n) {
            return /*#__PURE__*/_react.default.createElement("li", {
              key: n,
              className: liBase + (c.props.className ? c.props.className : '') + (p.bs4 ? '' : parseInt(p.active) === n ? ' active' : '')
            }, /*#__PURE__*/_react.default.createElement("a", {
              className: aBase + (p.bs4 ? parseInt(p.active) === n ? ' active' : '' : ''),
              href: "/#",
              onClick: _this2.handleClickTab.bind(_this2, n)
            }, c.props.name));
          });
        } else {
          return /*#__PURE__*/_react.default.createElement("li", {
            className: liBase + (p.children.props.className ? p.children.props.className : '') + (p.bs4 ? '' : ' active')
          }, /*#__PURE__*/_react.default.createElement("a", {
            className: aBase + (p.bs4 ? ' active' : ''),
            href: "/#",
            onClick: this.handleClickTab.bind(this, 0)
          }, p.children.props.name));
        }
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var p = this.props;
      var content;
      var className;

      if (p.children instanceof Array) {
        content = p.children[p.active];
        className = p.children[p.active].props.className;
      } else {
        content = p.children;

        if (p.children) {
          className = p.children.props.className;
        }
      }

      return /*#__PURE__*/_react.default.createElement(ReduxTabsStyled, {
        className: 'redux-tabs-outher' + (p.fullHeight ? ' full-height' : '')
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "nav nav-tabs"
      }, this.renderChildren()), /*#__PURE__*/_react.default.createElement("div", _extends({}, p.contentProps, {
        className: className
      }), content));
    }
  }]);

  return ReduxTabs;
}(_react.Component);

exports.default = ReduxTabs;