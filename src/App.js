import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Home />
          <About />
        </div>
    );
  }
}

export default App;
