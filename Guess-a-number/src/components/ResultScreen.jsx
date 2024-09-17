export default function ResultScreen({ message, onPlayAgain }) {
  return (
    <div className="result_container">
      <h1>Game Result</h1>
      <p>{message}</p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}
