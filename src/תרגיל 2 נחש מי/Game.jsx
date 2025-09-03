
import { useState } from "react";

export function Game({ num, guess, setGuess, setHasWon }) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("שלום");
  const [value, setValue] = useState("");
  
  const checkGuess = (a) => {  
    setValue(+a.target.value);

    if (value === num) {
      setMessage("ניצחת!");
      setHasWon(true);
    } else {
      setGuess(guess + 1);
      setMessage(value < num ? "הכנס מספר גדול יותר" : "הכנס מספר קטן יותר");
    }
  };

  return (
    <>
      <input
        type="number"
        placeholder="הכנס מספר בין 1 ל-1000"
        onBlur={checkGuess}
      />
      <h1>{message}</h1>
      <p>ניחוש מספר: {guess}</p>
    </>
  );
}
