import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HomePage />
        </Layout>
      </div>
    );
  }
}

export default App;
