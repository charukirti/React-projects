import { useReducer } from "react";
import "./App.css";
import GuessAnumber from "./components/GuessAnumber";
import WelcomeMsg from "./components/WelcomeMsg";
import ResultScreen from "./components/ResultScreen";
import { GameReducer, initialState } from "./components/GameReducer";

export default function App() {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const handlePlayAgain = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <main>
      {state.currentPage === "welcome" && (
        <WelcomeMsg
          previousScore={state.previousScore}
          previousLevel={state.previousLevel}
          onLevelSelect={(level) =>
            dispatch({ type: "SET_LEVEL", payload: level })
          }
        />
      )}
      {state.currentPage === "game" && (
        <GuessAnumber state={state} dispatch={dispatch} />
      )}
      {state.currentPage === "finished" && (
        <ResultScreen message={state.message} onPlayAgain={handlePlayAgain} />
      )}
    </main>
  );
}
