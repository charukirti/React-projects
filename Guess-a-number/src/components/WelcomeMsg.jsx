export default function WelcomeMsg({
  previousLevel,
  previousScore,
  onLevelSelect,
}) {
  return (
    <section className="welcome_msg">
      <h1>
        Welcome 👋 <br />
        To the number guessing game
      </h1>
      <p className="previous_mode">
        Previous Level: {previousLevel ?? "Haven't played yet."}
      </p>
      <p className="high_score">
        High Score:{" "}
        {previousScore !== null
          ? `${previousScore} attempts remaining`
          : "No score yet"}
      </p>
      <div className="level">
        <label htmlFor="level">Select a level: </label>
        <select id="level" onChange={(e) => onLevelSelect(e.target.value)}>
          <option value="">Select a level</option>
          <option value="easy">Easy (1 - 20)</option>
          <option value="medium">Medium (1-50)</option>
          <option value="hard">Hard (1 - 100)</option>
        </select>
      </div>
    </section>
  );
}
