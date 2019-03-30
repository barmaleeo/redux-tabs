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
      if (p.children instanceof Array) {
        return p.children.map((c, n) => React.createElement("li", {
          key: n,
          className: parseInt(p.active) === n ? 'active' : null
        }, React.createElement("a", {
          href: "/#",
          onClick: this.handleClickTab.bind(this, n)
        }, c.props.name)));
      } else {
        return React.createElement("li", {
          className: 'active'
        }, React.createElement("a", {
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

    if (p.children instanceof Array) {
      content = p.children[p.active];
    } else {
      content = p.children;
    }

    return React.createElement("div", {
      className: "redux-tabs-outher"
    }, React.createElement("ul", {
      className: "nav nav-tabs"
    }, this.renderChildren()), React.createElement("div", p.contentProps, content));
  }

}