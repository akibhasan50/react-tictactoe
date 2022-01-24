import React from 'react';
import Board from './components/Board';
import './styles/root.scss'
const App = () => {
 
  return (
    <div className="app">
     Tic Tac Toe
     <Board/>
    </div>
  );
};

export default App;
