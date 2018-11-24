import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs/Auxs';
import TopHeading from '../../components/RulesPage/TopHeaading/TopHeading';
import Rules from '../../components/RulesPage/Rules/Rules';

class RulesPage extends Component {
    render () {
        return (
            <Auxs>
                <TopHeading />
                <Rules />
            </Auxs>
        )
    }
}

export default RulesPage;