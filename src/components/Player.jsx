import {useState} from "react";

export default function Player ({name, symbol}) {
    const [buttonValue, setButton] = useState();
    let isButton = true
    let playerName =  <span className="player-name">{name}</span>;
    let buttonType = <button onClick={() => handleButton("edit")}>Edit</button>
  


    function handleButton (isButton){

        console.log(isButton);
        
        if(isButton == "edit"){
          setButton(true);
        }else{
          setButton(false);
        }
       
    }


    if(buttonValue){
    
      playerName = <input type="text" ></input>
      buttonType = <button onClick={() =>handleButton("save")}>Save</button>
   
    }
    


    return(
        <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        {buttonType}
      </li>
    );
}