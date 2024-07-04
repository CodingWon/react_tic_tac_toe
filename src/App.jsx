import Player from "./components/Player"

function App() {

  return (
    <main>
      <div id="game-container">
        {/*PLAYERS*/}
        <ol id="players">
          <Player name="player1" symbol="X" />
          <Player name="player2" symbol="O" />
        </ol>


        {/*GAME BOARD*/}
      </div>

      {/*LOG*/}
    </main>
  )
}

export default App
