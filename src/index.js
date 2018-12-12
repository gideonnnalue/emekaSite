import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import './light-bootstrap-dashboard.css';
import './animate.min.css';
import './demo.css';
import 'font-awesome/css/font-awesome.min.css';
import './pe-icon-7-stroke.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
