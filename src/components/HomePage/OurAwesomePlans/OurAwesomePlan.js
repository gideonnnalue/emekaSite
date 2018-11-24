import React from 'react';
import loginLogo from '../../../assets/img/img2.png';
import depositLogo from '../../../assets/img/img1.png';
import profitLogo from '../../../assets/img/img3.png';
import withdrawLogo from '../../../assets/img/img4.png';
import './OurAwesomePlan.css';

const ourAwesomePlan = ( props ) => {
    return (
        <div className="container-fluid px-0">
            <section id="awesome-plan-info">
                <div className="container mt-6 mx-auto text-center  fill-viewport-80 py-5">
                    <div className="row pb-5">
                        <div className="col-12">
                            <h6 className="text-uppercase plan-heading-font">Our Awesome Plans</h6>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center ">
                        <div className=" col plan-pricing-card mx-3 mb-5">
                            <img src={loginLogo} width="120" className="mt-5"/>
                            <h2 className="pt-4">Starter</h2>
                            <h3 className="pt-3">40% after 24 hours</h3>
                            <h3 className="pt-3 price-tag-plan">min - 10$</h3>
                            <h3 className="pt-1 price-tag-plan">max - 3000$</h3>
                            <button className="btn btn-primary px-5 py-3 mt-3 text-uppercase font-weight-bold plan-signup-btn mb-4">invest now</button>
                        </div>
                        <div className=" col plan-pricing-card mx-3 mb-5">
                            <img src={depositLogo} width="120" className="mt-5"/>
                            <h2 className="pt-4">Starter</h2>
                            <h3 className="pt-3">40% after 24 hours</h3>
                            <h3 className="pt-3 price-tag-plan">min - 10$</h3>
                            <h3 className="pt-1 price-tag-plan">max - 3000$</h3>
                            <button className="btn btn-primary px-5 py-3 mt-3 text-uppercase font-weight-bold plan-signup-btn mb-4">invest now</button>
                        </div>
                        <div className=" col plan-pricing-card mx-3 mb-5">
                            <img src={profitLogo} width="120" className="mt-5"/>
                            <h2 className="pt-4">Starter</h2>
                            <h3 className="pt-3">40% after 24 hours</h3>
                            <h3 className="pt-3 price-tag-plan">min - 10$</h3>
                            <h3 className="pt-1 price-tag-plan">max - 3000$</h3>
                            <button className="btn btn-primary px-5 py-3 mt-3 text-uppercase font-weight-bold plan-signup-btn mb-4">invest now</button>
                        </div>
                        <div className=" col plan-pricing-card mx-3 mb-5">
                            <img src={withdrawLogo} width="120" className="mt-5"/>
                            <h2 className="pt-4">Starter</h2>
                            <h3 className="pt-3">40% after 24 hours</h3>
                            <h3 className="pt-3 price-tag-plan">min - 10$</h3>
                            <h3 className="pt-1 price-tag-plan">max - 3000$</h3>
                            <button className="btn btn-primary px-5 py-3 mt-3 text-uppercase font-weight-bold plan-signup-btn mb-4">invest now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ourAwesomePlan;