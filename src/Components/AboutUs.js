import React, { Component } from 'react';
import './home.css';
import { AboutUsItem } from './AboutUsItem';
export class AboutUs extends Component {
    displayName = AboutUs.name

    render() {

        return (
            <div>
                <AboutUsItem url='jennifer.png' flipped={false} alt='Jennifer Dyer - CEO' title='Jennifer Dyer - CEO' email='jennifer@yourhealth.com' text="Jennifer started work in 2017 and immediately became CEO because she' s awesome. Her ambition is to take over the world." />
                <AboutUsItem url='bob.png' flipped={false} alt='Bob Hoskins - Lead Psychiatrist' title='Bob Hoskins - Lead Psychiatrist' email='bob@yourheath.com' text='Bob is our lead psychiatrist. He will fix your brain while you wait.' />
                <AboutUsItem url='fern.png' flipped={false} alt='Fern - Head of Recruitment' title='Fern - Head of Recruitment' email='fern@yourhealth.com' text='Fern has been recruiting for over 100 years and is unchallenged in her field' />


            </div>
        );
    }
}
