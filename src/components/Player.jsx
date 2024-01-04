import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    setSubmitted(true);
  }
  function handleChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : " unkown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
