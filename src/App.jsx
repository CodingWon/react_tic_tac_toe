import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);         // 버튼 하나를 클릭할 때마다 이 배열에 순서를 하니씩 추가한다. 
  // const [hasWinner, setHasWinner] = useState(false); 불필요
  //상태를 하나 더 만들어서 크게 다를 것 없는 정보를 저장하는 것은 리액트 개발자로서 피하는 것이 좋다.
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns) ;

  let gameBoard = [...initialGameBoard.map(array => [...array] )];

  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row,col} = square;

      gameBoard[row][col] = player;
  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {                         // GameBoard 에서 handleSelectSqure 를 제어한다.
   // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {                         // 새로운 인풋을 생성 필요 ! , 
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },    //어떤 플레이어가 어떤 버튼을 눌렸는지에 대한 정보를 이전 턴 앞에 두어서 배열의 첫 항목이 언제나 최신 수가 되도록 지정
        ...prevTurns
      ];

      return updateTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

return (
  <main>
    <div id="game-container">
      {/*PLAYERS*/}
      <ol id="players" className="highlight-player">
        <Player initialName="player1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="player2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <GameBoard
        onSelectSquare={handleSelectSquare}
        board={gameBoard}
      />
    </div>

    <Log turns={gameTurns}/>
  </main>
)
}

export default App
