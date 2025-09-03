import { useState } from "react";

import { Game } from "./Game";

export function Main() {
    const [num, setNum] = useState(Math.floor((Math.random() * 99)) + 1);
    const[guess,setGuess]=useState(0)
    const [hasWon, setHasWon] = useState(false);
    return(
    <>
    <h1>נחש את המספר!👌</h1>
    {guess<10 && !hasWon
        ?<Game 
            num={num}
            guess={guess}
            setGuess={setGuess}
            setHasWon={setHasWon}
        ></Game> 
        : hasWon
        ?<h2>ניצחת! ניחשת נכון אחרי {guess} ניחושים 🎉</h2>
        : <>
        <h2>נגמרו לך הניחושים! 😞</h2>
        <p>המספר הנכון היה: {num}</p>
        </>
    }
    </>)
}