import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Qna from './components/Qna/Qna';
import AnswersSection from './components/AnswersSection/AnswersSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="mmt-app-body">
          <Qna />
          <AnswersSection />
        </div>
      </div>
    );
  }
}

export default App;
