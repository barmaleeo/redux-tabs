function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react'; //import './ReduxTabsStyle';

export default class ReduxTabs extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClickTab", (n, e) => {
      this.props.onClick(n, this);
      e.stopPropagation();
    });
  }

  render() {
    const p = this.props;
    return React.createElement("div", {
      className: "redux-tabs-outher"
    }, React.createElement("ul", {
      className: "nav nav-tabs"
    }, p.children.map((c, n) => React.createElement("li", {
      key: n,
      className: parseInt(p.active) === n ? 'active' : null
    }, React.createElement("a", {
      href: "/#",
      onClick: this.handleClickTab.bind(this, n)
    }, c.props.name)))), React.createElement("div", p.contentProps, p.children[p.active]));
  }

}