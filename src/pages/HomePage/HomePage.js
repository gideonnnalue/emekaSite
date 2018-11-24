import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs/Auxs';
import TopLandingPage from '../../components/HomePage/TopLandingPage/TopLandingPage';
import HowWeWork from '../../components/HomePage/HowWeWork/howWeWork';
import AboutUs from '../../components/HomePage/AboutUs/AboutUs';
import AboutMinning from '../../components/HomePage/AboutMining/AboutMinning';
import OurAwesomePlan from '../../components/HomePage/OurAwesomePlans/OurAwesomePlan';
import LatestTransactions from '../../components/HomePage/LatestTransactions/LatestTransaction';

class HomePage extends Component {
    render () {

        return (
            <Auxs >
                <TopLandingPage />   
                <HowWeWork />
                <AboutUs />
                <AboutMinning />
                <OurAwesomePlan />
                <LatestTransactions />
            </Auxs>
        )
    }
}

export default HomePage;