import React from 'react';
import './howWeWork.css';
import loginLogo from '../../../assets/img/login.png';
import depositLogo from '../../../assets/img/deposit.png';
import profitLogo from '../../../assets/img/profits.png';
import withdrawLogo from '../../../assets/img/withdraw.png';

const howWeWork = ( props ) => {
    return (
        <div className="container-fluid px-0">
            <section id="work-info">
                <div className="container mt-6 mx-auto text-center  fill-viewport-80 py-5">
                    <div className="row pb-5">
                        <div className="col-12">
                            <h6 className="text-uppercase info-font">How CRYPTO.SITE WORKS</h6>
                            <hr className="we-work-divider"/>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center main-header">
                        <div className=" col work-plan">
                            <img src={loginLogo} width="120"/>
                            <h2 className="pt-4">Sign up</h2>
                            <p>Sign up as a new user with your personal details.</p>
                        </div>
                        <div className=" col work-plan">
                            <img src={depositLogo} width="120"/>
                            <h2 className="pt-4">Sign up</h2>
                            <p>Sign up as a new user with your personal details.</p>
                        </div>
                        <div className=" col work-plan">
                            <img src={profitLogo} width="120"/>
                            <h2 className="pt-4">Sign up</h2>
                            <p>Sign up as a new user with your personal details.</p>
                        </div>
                        <div className=" col work-plan">
                            <img src={withdrawLogo} width="120"/>
                            <h2 className="pt-4">Sign up</h2>
                            <p>Sign up as a new user with your personal details.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default howWeWork;