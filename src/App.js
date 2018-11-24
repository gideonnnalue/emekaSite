import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import FAQPage from './pages/FAQPage/FAQPage';
import RulesPage from './pages/RulesPage/RulesPage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
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
