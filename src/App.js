import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import './App.css';
import Board from './Board';
import Game from './Game'

function App() {
  console.log(Game, "Game")
  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <Board />
      </>
    </DndProvider>
  );
}

export default App;
