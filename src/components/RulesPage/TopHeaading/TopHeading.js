import React from 'react';
import './TopHeading.css';


const topHeader = ( props ) => {
    return (
        <div className="container-fluid px-0">
            <section id="introduction">
                <div className="container pt-6">
                    <div className="row fill-viewport-35 align-items-center main-header">
                        <div className="col-12 text-center">
                        <h1 className="text-white display-3 main-header-font">Rules and Agreement</h1>
                        
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default topHeader;