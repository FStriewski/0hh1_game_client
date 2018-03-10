import React, { Component } from 'react';
import Board from './containers/board'
import CreateGameButton from './components/createGameButton'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
     return (
       <div className="App">
         <h1 className="title">0hh1</h1>
         <Board />
         <CreateGameButton/>
       </div>
     )
   }
}

export default App;
