import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleButton() {
    setIsEditing((editing) => !editing);

    if(isEditing){
      onChangeName(symbol, playerName)
    }
    

  }

  function handleChange(e) {
    console.log(e.target.value);
    let editName = e.target.value
    setPlayerName(editName);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = <input type="text" required  value={playerName} onChange={handleChange}></input>
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}