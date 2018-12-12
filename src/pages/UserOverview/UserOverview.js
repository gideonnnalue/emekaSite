import React from 'react';
import Overview from '../../components/DashboardPage/OverviewPage/Overview';
import Sidebar from '../../components/DashboardPage/Sidebar/Sidebar';

const userOverview = ( props ) => {
    return (
        <div>
            <Sidebar />
            <Overview />
        </div>
    )
}

export default userOverview;