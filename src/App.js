import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import DashboardLayout from './hoc/Layout/DashboardLayout';
import HomePage from './pages/HomePage/HomePage';
import FAQPage from './pages/FAQPage/FAQPage';
import RulesPage from './pages/RulesPage/RulesPage';
import Dashboard from './pages/Dashboard/Dashboard';
import UserOverview from './pages/UserOverview/UserOverview';
import Investment from './pages/Investment/Investment';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';


class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/overview" component={UserOverview} />
                <Route path="/investment" component={Investment} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/rules" component={RulesPage} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/" component={HomePage} />
              
            </Switch>
          </Layout>
        
      </div>
    );
  }
}

export default App;
