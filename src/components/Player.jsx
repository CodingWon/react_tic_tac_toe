import {useState} from "react";

export default function Player ({name, symbol}) {
    const [isEditing, setIsEditing] = useState();
 
    let playerName =  <span className="player-name">{name}</span>;
  
    function handleButton (){
      setIsEditing(true);
    }


    if(isEditing){
      playerName = <input type="text" required ></input>
   
    }

    return(
        <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
          <button onClick={handleButton}>Edit</button>
      </li>
    );
}