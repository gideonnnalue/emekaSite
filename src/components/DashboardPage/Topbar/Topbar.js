import React from 'react';

const Topbar = ( props ) => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Dashboard</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-dashboard" />
                    <p className="hidden-lg hidden-md">Dashboard</p>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-globe" />
                    <b className="caret hidden-lg hidden-md" />
                    <p className="text-dark">
                      5 Notifications
                      <b className="caret" />
                    </p>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Notification 1</a></li>
                    <li><a href="#">Notification 2</a></li>
                    <li><a href="#">Notification 3</a></li>
                    <li><a href="#">Notification 4</a></li>
                    <li><a href="#">Another notification</a></li>
                  </ul>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-search" />
                    <p className="hidden-lg hidden-md">Search</p>
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href>
                    <p className="text-dark">Account</p>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <p>
                      Dropdown
                      <b className="caret" />
                    </p>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something</a></li>
                    <li className="divider" />
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <p>Log out</p>
                  </a>
                </li>
                <li className="separator hidden-lg" />
              </ul>
            </div>
          </div>
        </nav>
        </div>
    )
}

export default Topbar;