import React from 'react';
import './TopLandingPage.css';


 
const topLandingPage = ( props ) => {
    return (
        
        <div className="container-fluid px-0">
            <section id="introduction">
                <div className="container pt-6">
                    <div className="row fill-viewport align-items-center main-header">
                        <div className="col-12 text-center">
                        <h1 className="text-white display-3 main-header-font">NEW TRADING PLATFORM OF THE FUTURE</h1>
                        <p className="lead text-white-70 text-size-cus">A new business platform that leverages demand for a token and the needs of milions of people around the world</p>
                        
                            <div className="row justify-content-center py-3">
                                <div className="col-12 col-md-6 align-items-right text-center">
                                    <button type="button" className="btn btn-primary text-uppercase btn-rnd-cus sign-bt main-header-font float-right d-block d-md-inline-block my-2">Login now</button>
                                </div>
                                <div className="col-12 col-md-6">
                                    <button type="button" className="btn btn-primary text-uppercase btn-rnd-cus reg-btn main-header-font float-left d-block d-md-inline-block my-2">Register now</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default topLandingPage;