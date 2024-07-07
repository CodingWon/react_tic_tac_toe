import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => {
      const result = curActivePlayer === 'X' ? 'O' : 'X'
      return result;
    });
  }

  return (
    <main>
      <div id="game-container">
        {/*PLAYERS*/}
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="player2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol = {activePlayer} />
      </div>

      {/*LOG*/}
    </main>
  )
}

export default App
