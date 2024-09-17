export default function GuessAnumber({ state, dispatch }) {
  console.log(state.targetNumber);
  function handleInputChange(e) {
    const value = e.target.value;
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      dispatch({ type: "SET_GUESS", payload: value });
    }
  }
  return (
    <div className="container">
      <h1>Guess A Number</h1>

      <div className="data">
        <p>Dificulty Level: {state.currentLevel}</p>
        <p>Attempts: {state.currentAttempts}</p>
      </div>

      <input
        type="text"
        placeholder="Enter your guess"
        onChange={handleInputChange}
      />

      <p className="message">{state.message}</p>

      <div className="btn_container">
        <button
          className="guess"
          onClick={() =>
            dispatch({ type: "HANDLE_GUESS", payload: state.currentGuess })
          }
        >
          Check Guess
        </button>
        <button
          className="reset"
          onClick={() => dispatch({ type: "RESET_GAME" })}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
