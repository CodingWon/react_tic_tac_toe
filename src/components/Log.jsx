export default function Log({ turns }) {
    //플레이어가 어떤 수를 뒀는지 확인하는데  순서에 대한 동적인 배열을 제어해야한다.
    // 이 배열은 버튼을 클릭할 때마다 수가 증가한다.
    // 어떤 버튼을 클릭했는지에 대한 정보는 GameBoard 컴포넌트에서 생성되기 때문에 Log에서는 제어할 수 없다.


    return ( <ol id="log">
        {turns.map( (turn) => (
            <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col} 
            </li>
        ))}
    </ol>
    );
}