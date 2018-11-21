import React from 'react';
import Auxs from '../Auxs/Auxs.js';
import Navigation from '../../components/Navigation/Navigation';

const layout = (props) => (
    <Auxs>
        <Navigation />
        <main>
            {props.children}
        </main>
    </Auxs>
);

export default layout;