import React, { Component } from 'react';
import { Route } from 'react-router';
import {
    BrowserRouter
} from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Components/Home';
import { ContactUs } from './Components/ContactUs';
import { AboutUs } from './Components/AboutUs';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <BrowserRouter>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/aboutUs' component={AboutUs} />
                <Route path='/contactUs' component={ContactUs} />
                </Layout>
                </BrowserRouter>
        );
    } 
}