import React, { Component } from 'react';
import InvestmentPage from '../../components/DashboardPage/Investment/Investment';
import Sidebar from '../../components/DashboardPage/Sidebar/Sidebar';


class Investment extends Component {
    render () {
        return (
            <div>
                <Sidebar />
                <InvestmentPage />
            </div>
        )
    }
}

export default Investment;