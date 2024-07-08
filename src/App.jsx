import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);         // 버튼 하나를 클릭할 때마다 이 배열에 순서를 하니씩 추가한다. 
                                                          //상태를 하나 더 만들어서 크게 다를 것 없는 정보를 저장하는 것은 리액트 개발자로서 피하는 것이 좋다.

  function handleSelectSquare() {                         // GameBoard 에서 handleSelectSqure 를 제어한다.
    setActivePlayer((curActivePlayer) => {
      curActivePlayer === 'X' ? 'O' : 'X'
      setGameTurns();
    }
    );
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

     <Log />
    </main>
  )
}

export default App
