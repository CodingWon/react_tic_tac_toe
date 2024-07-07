import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let playerName = <span className="player-name">{name}</span>;

  function handleButton() {
    setIsEditing((editing) => !editing);

  }

  if (isEditing) {
    playerName = <input type="text" required  value={name}></input>
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}