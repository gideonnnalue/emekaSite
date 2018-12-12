import React from 'react';
import Auxs from '../Auxs/Auxs';

const dashBoardLayout = ( props ) => {
    return (
        <Auxs>
            <main>
                {props.children}
            </main>
        </Auxs>
    )
}

export default dashBoardLayout;