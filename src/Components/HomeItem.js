// JavaScript source code
import React, { Component } from 'react';
import './home.css';

export class HomeItem extends Component {
    displayName = HomeItem.name
    constructor(props) {
        super(props);
        this.state = { showAll : false };
    }

    toggleMore() {
        this.setState({ showAll: !this.state.showAll });
    }

    renderMore(showAll) {
        if (!showAll) {
            return <div className="more" onClick={() => { this.toggleMore() }}>&nbsp;more...</div>;
        }
    }
    renderText() {
        const showAllText = this.state.showAll;
        let text = this.props.shortText;
        if (showAllText) {
            text = this.props.text;
        }
        

        return <div className="shortText">
                <div>{text}</div>
            {this.renderMore(showAllText)}
            </div>;
    }

    renderItem() {
        return <div className='item'>
            <img src={this.props.url} alt={this.props.alt} className="homeImg" />
            <div>
                <div className="itemHeader">{this.props.title}</div>
                <div className="itemText">{this.props.text}</div>
                {this.renderText()}

            </div>
        </div>
    }

    renderFlippedItem() {
        return <div className='item'>

            <div>
                <div className="itemHeader">{this.props.title}</div>
                <div className="itemText">{this.props.text}</div>
                {this.renderText()}
            </div>
            <img src={this.props.url} alt={this.props.alt} className="homeImg" />
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
