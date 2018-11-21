import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs/Auxs';
import TopLandingPage from '../../components/HomePage/TopLandingPage/TopLandingPage';
import HowWeWork from '../../components/HomePage/HowWeWork/howWeWork';
import AboutUs from '../../components/HomePage/AboutUs/AboutUs';

class HomePage extends Component {
    render () {

        return (
            <Auxs >
                <TopLandingPage />   
                <HowWeWork />
                <AboutUs />
            </Auxs>
        )
    }
}

export default HomePage;