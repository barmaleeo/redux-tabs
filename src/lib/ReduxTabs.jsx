import React, {Component} from 'react';

//import './ReduxTabsStyle';


export default class ReduxTabs extends Component {
    handleClickTab = (n, e) => {
        this.props.onClick(n, this);
        e.stopPropagation();
    };
    render() {
        const p = this.props;
        return (
            <div className="redux-tabs-outher">
                <ul className="nav nav-tabs">
                    {p && p.children && p.children.map((c,n) => (
                        <li key={n} className={parseInt(p.active)===n?'active':null}>
                            <a href="/#" onClick={this.handleClickTab.bind(this, n)}>{c.props.name}</a>
                        </li>))}
                </ul>
                <div {...p.contentProps}>
                    {(p.children && p.children.length>p.active)?p.children[p.active]:null}
                </div>
            </div>
        )
    }
}
