import './App.css';
import BoardModel from './models/BoardModel';
import Board from './components/board/Board';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(new BoardModel());

  return (
    <>
      <div>React-Chess</div>
      <Board board={board} playingAsWhite={false} />
    </>
  );
}

export default App;
