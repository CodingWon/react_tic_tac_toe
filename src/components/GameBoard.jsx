

// 여기서는 게임판을 업데이터하되 매 클릭마다 업데이트가 실행된다. 어떤 순서로 클릭했는지는 알 수 없지만 위치로는 알 수 있다.
export default function GameBoard({onSelectSquare ,board}) {
    return (<ol id="game-board">
        {board.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>
        )}
    </ol>);

}