import React, { Component } from 'react';
import './contactUs.css';
export class ContactUs extends Component {
    displayName = ContactUs.name

    renderMap() {
        const map = { __html: '<div class="mapouter"><div class="gmap_canvas"><iframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Common%20Rd%2C%20%20Tadcaster%20%20LS24%209UN%2C%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net">crocothemes.net</a></div><style>.mapouter{text-align:right;height:350px;width:350px;}.gmap_canvas {overflow:hidden;background:none!important;height:350px;width:350px;}</style></div>' };

        return <div dangerouslySetInnerHTML={map}></div>;
    }
    renderForm() {
        return <div className="formHolder">
            <div className="formRow">
                <div className="formLabel">Your Name:</div>
                <div className="formInput"><input type="text"
                    cols="40"
                    /></div>
            </div>
            <div className="formRow">
                <div className="formLabel">Message:</div>
                <div className="formInput"><textarea type="text"cols="40" rows="5" /></div>
            </div>
            <input  className="button" value="Submit" />
        </div>;
    }
    render() {

        return (
            <div className="contactUs" >
                <div className="companyName">YourHealth Ltd</div>
                <div className="mapAddress">
                    {this.renderMap()}
                    <div className="address">
                        <div>YourHealth Ltd.UK</div>
                        <div>Common Rd,UK</div>
                        <div>TadcasterUK</div>
                        <div>LS24 9UN,UK</div>
                        <div>UK</div>
                    </div>
                </div>
                {this.renderForm()}

            </div>
        );
    }
}