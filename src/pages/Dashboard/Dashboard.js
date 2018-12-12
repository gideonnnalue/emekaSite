import React, { Component } from 'react';
import MainDashboard from '../../components/DashboardPage/MainDashboard/MainDashboard';
import Sidebar from '../../components/DashboardPage/Sidebar/Sidebar';


class Dashboard extends Component {
    render () {
        return (
            <div>
                <Sidebar />
                <MainDashboard />
            </div>
        )
    }
}

export default Dashboard;