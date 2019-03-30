import React, {Component} from 'react';

//import './ReduxTabsStyle';


export default class ReduxTabs extends Component {
    handleClickTab = (n, e) => {
        this.props.onClick(n, this);
        e.stopPropagation();
    };

    renderChildren(){
        const p = this.props;

        if(p && p.children){
            if(p.children instanceof Array){
                return (p.children.map((c,n) => (
                    <li key={n} className={parseInt(p.active)===n?'active':null}>
                        <a href="/#" onClick={this.handleClickTab.bind(this, n)}>{c.props.name}</a>
                    </li>)))
            }else{
                return (
                    <li className={'active'}>
                        <a href="/#" onClick={this.handleClickTab.bind(this, 0)}>{p.children.props.name}</a>
                    </li>
                )
            }
        }else{
            return null;
        }
    }

    render() {
        const p = this.props;
        let content;
        if(p.children instanceof Array) {
            content = p.children[p.active];
        }else{
            content = p.children;
        }
        return (
            <div className="redux-tabs-outher">
                <ul className="nav nav-tabs">
                    {this.renderChildren()}
                </ul>
                <div {...p.contentProps}>
                    {content}
                </div>
            </div>
        )
    }
}
