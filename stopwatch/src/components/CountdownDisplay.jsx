export default function CountdownDisplay({
  onPause,
  onReset,
  onResume,
  hours,
  minutes,
  seconds,
  isStarted,
}) {
  return (
    <>
      <div className="countdown-display">
        <p>{hours < 10 ? '0' : ''}{hours}</p>
        <span>:</span>
        <p>{minutes < 10 ? '0' : ''}{minutes}</p>
        <span>:</span>
        <p>{seconds < 10 ? '0' : ''}{seconds}</p>
      </div>

      <div className="countdown-buttons">
        {isStarted ? (
          <button onClick={onPause}>Pause</button>
        ) : (
          <button onClick={onResume}>Resume</button>
        )}

        <button onClick={onReset}>Reset</button>
      </div>
    </>
  );
}
