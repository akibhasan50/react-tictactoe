import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss'
import {calculateWinner} from './helpers';
import History from './components/History';


const App = () => {
  const [history, setHistory] = useState([
    {
      board:Array(9).fill(null),
      isNext:false
    
    }
  
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove]

  
  const {winner} = calculateWinner(current.board)

  const handleSquareClick= (position) => {
   
    if(current.board[position] || winner){
      return
    }
    setHistory((prev) =>{
      const last = prev[prev.length-1]
      
    const newBoard =  last.board.map((square,pos) =>{
          if(pos === position){
           
            return last.isNext ? "X" :  "0" 
          }
        return square
          
      })

      return prev.concat({board:newBoard,isNext: !last.isNext})
    })
    setCurrentMove( prev => prev +1)
  }
  const moveTo = (move) =>{
    setCurrentMove(move)
  }
 
 
 const message = winner ? `winner is ${winner}` : `Next player is ${current.isNext ? 'X' : 'O'}`
  return (
    <div className="app">
     Tic Tac Toe
     <h2>{message}</h2>
     <Board board={current.board} handleSquareClick={handleSquareClick}/>
     <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
};

export default App;
