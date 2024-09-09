import { useReducer, useEffect, useRef } from "react";
import CountdownDisplay from "./CountdownDisplay";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isStarted: false,
  hasStarted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "START":
      if (state.hours === 0 && state.minutes === 0 && state.seconds === 0)
        return state;
      return {
        ...state,
        isStarted: true,
        hasStarted: true,
      };

    case "PAUSE":
      return {
        ...state,
        isStarted: false,
      };
    case "RESET":
      return initialState;

    case "SET_HOURS":
      return { ...state, hours: parseInt(action.payload) || 0 };

    case "SET_MINUTES":
      return { ...state, minutes: parseInt(action.payload) || 0 };

    case "SET_SECONDS":
      return { ...state, seconds: parseInt(action.payload) || 0 };

    case "TICK":
      let { hours, seconds, minutes } = state;
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        return {
          ...state,
          isStarted: false,
          hasStarted: false,
        };
      }
      return {
        ...state,
        hours,
        minutes,
        seconds,
      };

    default:
      return state;
  }
}

export default function CountdownInput() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let { hours, minutes, seconds, isStarted, hasStarted } = state;

  const intervalID = useRef(null);

  //  effect for change time

  useEffect(() => {
    if (isStarted) {
      intervalID.current = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    } else {
      clearInterval(intervalID.current);
    }
    return () => clearInterval(intervalID.current);
  }, [isStarted]);

  //  handler functions for input change

  function handleHourChange(e) {
    dispatch({ type: "SET_HOURS", payload: e.target.value });
  }

  function handleMinutesChange(e) {
    dispatch({ type: "SET_MINUTES", payload: e.target.value });
  }

  function handleSecondsChange(e) {
    dispatch({ type: "SET_SECONDS", payload: e.target.value });
  }

  // function for start, pause, and reset countdown

  function handleStart() {
    dispatch({ type: "START" });
  }

  function handlePause() {
    dispatch({ type: "PAUSE" });
  }

  function handleReset() {
    dispatch({ type: "RESET" });
  }

  return (
    <>
      {!hasStarted ? (
        <>
          <div className="countdown-inputs">
            <input
              type="text"
              placeholder="HH"
              maxLength={2}
              onChange={handleHourChange}
            />
            <span>:</span>
            <input
              type="text"
              placeholder="MM"
              maxLength={2}
              onChange={handleMinutesChange}
            />
            <span>:</span>
            <input
              type="text"
              placeholder="SS"
              maxLength={2}
              onChange={handleSecondsChange}
            />
          </div>

          <button onClick={handleStart}>START</button>
        </>
      ) : (
        <CountdownDisplay
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onPause={handlePause}
          onReset={handleReset}
          onResume={handleStart}
          isStarted={isStarted}
        />
      )}
    </>
  );
}
