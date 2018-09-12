// JavaScript source code
import React, { Component } from 'react';
import './home.css';

export class AboutUsItem extends Component {
    displayName = AboutUsItem.name


    
    renderEmail() {
        const html = { __html: '<a href="mailto:' + this.props.email + '">' + this.props.email + '</a>' };
        return <div className="aboutUsText email">
            <div>Email: </div>
            <div dangerouslySetInnerHTML={html}></div>
        </div>;
    }

    renderItem() {
        return <div className='item'>
            <img src={this.props.url} alt={this.props.alt} className="aboutUsImg" />
            <div className="aboutUsItem">
                <div className="itemHeader">{this.props.title}</div>
                {this.renderEmail()}
                <div className="aboutUsText">{this.props.text}</div>
                

            </div>
        </div>
    }

    renderFlippedItem() {
        return <div className='item'>

            <div>
                <div className="itemHeader">{this.props.title}</div>
                {this.renderEmail()}
                <div className="aboutUsText">{this.props.text}</div>
                
            </div>
            <img src={this.props.url} alt={this.props.alt} className="aboutUsImg" />
        </div>
    }
    render() {
        if (this.props.flipped) {
            return this.renderFlippedItem();
        }
        else {
            return this.renderItem();
        }
    }
}
