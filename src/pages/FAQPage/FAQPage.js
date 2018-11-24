import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs/Auxs';
import TopHeader from '../../components/FAQPage/TopHeader/TopHeader';
import Faq from '../../components/FAQPage/Faq/Faq';

class FAQPage extends Component {
    render () {
        return (
            <Auxs>
                <TopHeader />
                <Faq />
            </Auxs>
        )
    }
}

export default FAQPage;