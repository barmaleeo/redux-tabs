import React, {Component} from 'react';

//import './ReduxTabsStyle';


export default class ReduxTabs extends Component {
    handleClickTab = (n, e) => {
        this.props.onClick(n, this);
        e.preventDefault();
    };

    renderChildren(){
        const p = this.props;

        if(p && p.children){
            const liBase = 'nav-'+(p.bs4?'item':'link')+' ';
            const aBase = p.bs4?'nav-link':'';


            if(p.children instanceof Array){
                return (p.children.map((c,n) => (
                    <li key={n} className={liBase + (c.props.className?c.props.className:'') +
                                (p.bs4?'':(parseInt(p.active)===n?' active':''))}>
                        <a className={aBase + (p.bs4?(parseInt(p.active)===n?' active':''):'')}
                           href="/#" onClick={this.handleClickTab.bind(this, n)}>{c.props.name}</a>
                    </li>)))
            }else{
                return (
                    <li className={liBase + (p.children.props.className?p.children.props.className:'') + (p.bs4?'':' active')}>
                        <a className={aBase + (p.bs4?' active':'')}
                           href="/#" onClick={this.handleClickTab.bind(this, 0)}>{p.children.props.name}</a>
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
        let className;
        if(p.children instanceof Array) {
            content = p.children[p.active];
            className = p.children[p.active].props.className;
        }else{
            content = p.children;
            if(p.children) {
                className = p.children.props.className
            }
        }
        return (
            <div className="redux-tabs-outher">
                <ul className="nav nav-tabs">
                    {this.renderChildren()}
                </ul>
                <div {...p.contentProps} className={className}>
                    {content}
                </div>
            </div>
        )
    }
}
