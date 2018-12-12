import React from 'react';
import SideBarImg from '../../../assets/img/sidebar-5.jpg';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const sideBar = ( props ) => {
    return (
        <div className="sidebar" data-color="blue" data-image={SideBarImg} >
        {/*

        Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
        Tip 2: you can also add an image using data-image tag

    */}
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="http://www.creative-tim.com" className="simple-text">
              Creative Tim
            </a>
          </div>
          <ul className="nav">
            <li className="active ">
              <NavLink to="/dashboard" className="pl-2 pr-5 py-2">
                <i className="pe-7s-graph" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/overview" className="pl-2 pr-5 py-2">
                <i className="pe-7s-user" />
                <p>User Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/investment" className="pl-2 pr-5 py-2">
                <i className="pe-7s-note2" />
                <p>Investment</p>
              </NavLink>
            </li>
            <li>
              <a href="typography.html" className="pl-2 pr-5 py-2">
                <i className="pe-7s-news-paper" />
                <p>Typography</p>
              </a>
            </li>
            <li>
              <a href="icons.html" className="pl-2 pr-5 py-2">
                <i className="pe-7s-science" />
                <p>Icons</p>
              </a>
            </li>
            <li>
              <a href="maps.html" className="pl-2 pr-5 py-2">
                <i className="pe-7s-map-marker" />
                <p>Maps</p>
              </a>
            </li>
            <li>
              <a href="notifications.html" className="pl-2 pr-5 py-2">
                <i className="pe-7s-bell" />
                <p>Notifications</p>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    )
}

export default sideBar