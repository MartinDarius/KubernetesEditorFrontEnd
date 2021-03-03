import React from 'react';
import Board from './components/Board';
import Card from './components/Card';
import LeftComponent from './components/LeftComponent';

function App() {
  return (
    <div className="App">
      <main className="flexbox">
      <LeftComponent id="board-3" className="leftComponent" >
        <Card id="card-3" className="card" draggable="true">
            <p>Service</p>
          </Card>
        <Card id="card-2" className="card" draggable="true">
            <p>Pod</p>
        </Card>
        <Card id="card-1" className="card" draggable="true">
            <p>Deployment</p>
          </Card>
        </LeftComponent>
        <Board id="board-1" className="board">
          
        </Board>


       
      </main>
  
    </div>
  );
}

export default App;
