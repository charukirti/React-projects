export default function Footer({ tasks, clearTasks }) {
  return (
    <footer>
      <p className="total__items">
        Total Tasks <span>{tasks.length}</span>
      </p>
      <button className="btn__clear--item" onClick={clearTasks}>
        Clear Tasks
      </button>
    </footer>
  );
}
