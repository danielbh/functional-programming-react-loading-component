import React, { Component } from 'react';
import Panel from './components/Panel'
import './App.css';

class App extends Component {
  render() {

    const panels = [];
    for(let i=0;i<20;i++){
      panels.push(<Panel/>);
    }

    return (
      <div className="App">
        {panels}
      </div>
    );
  }
}

export default App;
