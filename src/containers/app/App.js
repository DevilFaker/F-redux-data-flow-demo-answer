import React, { Component } from 'react';
import Name from '../../components/Name';
import Greeting from '../../components/Greeting';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App" data-testid="app">
        <Name />
        <Greeting />
      </div>
    );
  }
}

export default App;
