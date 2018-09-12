import React, { Component } from 'react';
import './layout.css';
import { Nav } from './Nav';

 

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <div className="layout">
                <div className="navBar"><Nav /></div>
                <div className="pageArea">{this.props.children}</div>
            </div>
        );
    }
}
