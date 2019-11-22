function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react'; //import './ReduxTabsStyle';

export default class ReduxTabs extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClickTab", (n, e) => {
      this.props.onClick(n, this);
      e.preventDefault();
    });
  }

  renderChildren() {
    const p = this.props;

    if (p && p.children) {
      const liBase = 'nav-' + (p.bs4 ? 'item' : 'link') + ' ';
      const aBase = p.bs4 ? 'nav-link' : '';

      if (p.children instanceof Array) {
        return p.children.map((c, n) => React.createElement("li", {
          key: n,
          className: liBase + (c.props.className ? c.props.className + ' ' : '') + (parseInt(p.active) === n ? 'active' : '')
        }, React.createElement("a", {
          className: aBase,
          href: "/#",
          onClick: this.handleClickTab.bind(this, n)
        }, c.props.name)));
      } else {
        return React.createElement("li", {
          className: liBase + (p.children.props.className ? p.children.props.className + ' ' : '') + 'active'
        }, React.createElement("a", {
          className: aBase,
          href: "/#",
          onClick: this.handleClickTab.bind(this, 0)
        }, p.children.props.name));
      }
    } else {
      return null;
    }
  }

  render() {
    const p = this.props;
    let content;
    let className;

    if (p.children instanceof Array) {
      content = p.children[p.active];
      className = p.children[p.active].props.className;
    } else {
      content = p.children;

      if (p.children) {
        className = p.children.props.className;
      }
    }

    return React.createElement("div", {
      className: "redux-tabs-outher"
    }, React.createElement("ul", {
      className: "nav nav-tabs"
    }, this.renderChildren()), React.createElement("div", _extends({}, p.contentProps, {
      className: className
    }), content));
  }

}