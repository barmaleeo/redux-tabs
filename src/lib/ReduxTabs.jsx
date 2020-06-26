import React, {Component} from 'react';
import styled from 'styled-components'

//import './ReduxTabsStyle';
const ReduxTabsStyled = styled.div`
    &.full-height{
        height: 100%;
        display: flex;
        flex-direction: column;
        >div{
          flex:1;
          overflow-y: auto;
        }
    }
`

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
                return (p.children.map((c,n) => {
                    const name = (c.token ?? n).toString();
                    return (
                        <li key={n} className={liBase + (c.props.className?c.props.className:'') +
                                    (p.bs4?'':(p.active.toString()===name?' active':''))}>
                            <a className={aBase + (p.bs4?(p.active.toString()===name?' active':''):'')}
                               href="/#" onClick={this.handleClickTab.bind(this, name)}>{c.props.name}</a>
                        </li>)
                }))
            }else{
                return (
                    <li className={liBase + (p.children.props.className?p.children.props.className:'') + (p.bs4?'':' active')}>
                        <a className={aBase + (p.bs4?' active':'')}
                           href="/#" onClick={e=>{e.preventDefault()}}>{p.children.props.name}</a>
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
            for(const c of p.children){
                if(c.token === p.active){
                    content = c;
                    break;
                }
            }
            if(!content) {
                content = p.children[p.active];
            }
            className = content.props.className;
        }else{
            content = p.children;
            if(p.children) {
                className = p.children.props.className
            }
        }
        return (
            <ReduxTabsStyled className={'redux-tabs-outher' + (p.fullHeight?' full-height':'')}>
                <ul className="nav nav-tabs">
                    {this.renderChildren()}
                </ul>
                <div {...p.contentProps} className={className}>
                    {content}
                </div>
            </ReduxTabsStyled>
        )
    }
}
