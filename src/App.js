import React from 'react';
// import, { Component } from 'react';
import Title from './Title';

// class App extends Component {}
class App extends React.Component {
  render() {
    return (
      <div>
        
        <div className="container-test">
          <Title studentName="Emad" age="27" color="grey"/>
          <Title studentName="Didier" age="23" color="green"/>
          <Title studentName="Emadxx" age="3" color="blue"/>
          
        </div>
        
      </div>
    );
  }
}
export default App;
