import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Skills from './pages/Skills';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Home />
          <Projects />
          <Skills />
        </div>
    );
  }
}

export default App;
