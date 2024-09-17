export const initialState = {
  currentPage: "welcome",
  currentLevel: "",
  currentGuess: "",
  currentAttempts: 0,
  message: "",
  targetNumber: null,
  previousScore: null,
  previousLevel: null,
};

function grabLevelDetails(level) {
  switch (level) {
    case "easy":
      return { max: 20, attempts: 10 };
    case "medium":
      return { max: 50, attempts: 15 };
    case "hard":
      return { max: 100, attempts: 20 };
    default:
      return { max: 20, attempts: 10 };
  }
}

export function GameReducer(state, action) {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        currentGuess: parseFloat(action.payload),
      };

    case "SET_LEVEL":
      const { max, attempts } = grabLevelDetails(action.payload);
      return {
        ...state,
        currentPage: "game",
        currentLevel: action.payload,
        targetNumber: Math.floor(Math.random() * (max + 1)),
        currentAttempts: attempts,
        message: "",
      };

    case "HANDLE_GUESS":
      if(state.currentGuess === null || state.currentGuess === "") return state
      const newAttempts = state.currentAttempts - 1;
      const initialAttempts = grabLevelDetails(state.currentLevel).attempts;
      let message = "";
      let newPage = "game";
      let attemptsUsed = initialAttempts - newAttempts;

      if (state.currentGuess === state.targetNumber) {
        message = `Congratulations! You've guessed the number in ${attemptsUsed} attempts.`;
        newPage = "finished";
      } else if (newAttempts === 0) {
        message = `Game over! The number was ${state.targetNumber}.`;
        newPage = "finished";
      } else if (state.currentGuess < state.targetNumber) {
        message = "Too low! Try a higher number.";
      } else {
        message = "Too high! Try a lower number.";
      }

      const newScore =
        newPage === "finished" && state.currentGuess === state.targetNumber
          ? newAttempts
          : state.previousScore;

      return {
        ...state,
        currentAttempts: newAttempts,
        message,
        previousScore:
          state.previousScore === null
            ? newScore
            : Math.max(state.previousScore, newScore),
        previousLevel:
          newPage === "finished" ? state.currentLevel : state.previousLevel,
        currentPage: newPage,
      };

    case "RESET_GAME":
      return {
        ...initialState,
        previousScore: state.previousScore,
        previousLevel: state.previousLevel,
      };
    default:
      return state;
  }
}
