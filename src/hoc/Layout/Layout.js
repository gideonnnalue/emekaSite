import React from 'react';
import Auxs from '../Auxs/Auxs.js';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const layout = (props) => (
    <Auxs>
        <Navigation />
        <main>
            {props.children}
        </main>
        <Footer />
    </Auxs>
);

export default layout;