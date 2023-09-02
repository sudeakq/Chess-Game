import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import './App.css';
import Board from './Board';
import Game from './Game';
import subjectGame from './Game';
import { useEffect, useState } from 'react';

function App() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    const subscribe = subjectGame.subscribe(sub => setBoard(sub.chess))

    return () => subscribe.unsubscribe();
  }, []
  )
  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <Board board={board} />
      </>
    </DndProvider>
  );
}

export default App;
