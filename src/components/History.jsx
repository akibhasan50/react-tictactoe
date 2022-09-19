import React from 'react';

export default function History({history,moveTo,currentMove }) {
  return( 
  <ul  className="history">
      {
          history.map((_,index) =>{
              return( 
              <li key={index}>
                  <button    className={`btn-move ${index === currentMove ? 'active' : ''}`} type="button" onClick={() =>moveTo(index)}>{index === 0 ? 'go to game start' : `Go to move #${index}`}</button>
                  
            </li>
              
              )
          })
      }
       
  </ul>);
}
