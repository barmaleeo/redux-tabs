import { Component } from 'react';
export default class ReduxTabsContent extends Component {
  render() {
    return this.props.children ? this.props.children : null;
  }

}