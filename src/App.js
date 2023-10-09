import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './pages/Projects';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Home />
          <Projects />
        </div>
    );
  }
}

export default App;
