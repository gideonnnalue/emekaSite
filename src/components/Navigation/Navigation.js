import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/img1.png';
import './Navigation.css';


const Navigation = ( props ) => {
    return (
        <header className="">
         <nav className="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-light bg-light header-cus">
                <NavLink className="navbar-brand mb-0 h1 font-weight-bold" to="/"><img src={Logo} width="50dp"/></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-capitalized">
                        <li className="nav-item active">
                            <NavLink className="nav-link  font-weight-bold text-dark" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-weight-bold text-dark" to="/rules">Rules</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-weight-bold text-dark" to="/faq">FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-weight-bold text-dark" to="/">SUPPORT</NavLink>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-outline-primary button-login"><NavLink className="font-weight-bold text-dark" to="/login">Login</NavLink></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn btn-primary button-sign-up"><NavLink className="font-weight-bold" to="/signup">Sign Up</NavLink></button>
                        </li>
                        
                    </ul>
                
                </div>
      </nav>
        </header>
    )
}

export default Navigation;