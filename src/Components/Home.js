import React, { Component } from 'react';
import './home.css';
import { HomeItem } from './HomeItem';
export class Home extends Component {
    displayName = Home.name

    render() {

        return (
            <div>
                <HomeItem url='hereForYou.jpg' flipped={false} alt='here for you' title='HERE FOR YOU' shortText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit erat ac ipsum accumsan pulvinar.' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit erat ac ipsum accumsan pulvinar. Etiam tortor lorem, mollis eget nibh tempor, mattis accumsan lectus. Sed in consequat ligula. Curabitur sed purus lacus. Nulla pretium tincidunt aliquet. Etiam nisi sapien, faucibus non nulla in, pharetra luctus ex. In eget tristique dui, euismod luctus arcu. Etiam imperdiet et dui bibendum pharetra. Curabitur id mauris lacus. Suspendisse potenti. Cras finibus libero a quam mattis, eu varius leo auctor. Maecenas nisi lacus, vestibulum sed tincidunt sodales, dictum at turpis. Pellentesque nec lorem vitae justo blandit pretium vel et lectus. Suspendisse aliquam vel ligula sit amet sagittis. Pellentesque lobortis diam vel magna venenatis, vel laoreet ex fermentum.' />
                <HomeItem url='worldHealthier.jpg' flipped={true} alt='Making the world a healthier place' title='MAKING THE WORLD A HEALTHIER PLACE' shortText='Donec tincidunt nec erat ut tincidunt. Integer non sem nec urna venenatis feugiat.' text='Donec tincidunt nec erat ut tincidunt. Integer non sem nec urna venenatis feugiat. Curabitur ut est sit amet justo ullamcorper posuere a non ligula. Etiam in ex quis velit porttitor euismod. Suspendisse volutpat blandit sodales. Sed imperdiet feugiat tortor sed vestibulum. Curabitur dignissim fermentum ex, non malesuada tellus iaculis quis. Vivamus tempus lorem sit amet laoreet lobortis.' />
                <HomeItem url='medications.jpg' flipped={false} alt='Medications that you need' title='MEDICATIONS THAT YOU NEED' shortText='Sed placerat accumsan tellus a viverra. Aliquam aliquam cursus ligula' text='Sed placerat accumsan tellus a viverra. Aliquam aliquam cursus ligula, sit amet aliquam metus condimentum et. Etiam sed nisi nec est venenatis accumsan. Duis tristique, turpis non tincidunt sagittis, sapien sem tempor nibh, ut posuere tortor sem luctus eros. Duis egestas erat ac eleifend commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tincidunt, lectus eget porttitor tempus, lorem erat mollis lacus, id imperdiet lacus diam quis dolor.' />


            </div>
        );
    }
}
