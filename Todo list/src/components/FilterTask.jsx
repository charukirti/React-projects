export default function FilterTask({ updateFilter }) {
  return (
    <section className="filter__tasks">
      <button className="filter__task--all" onClick={() => updateFilter("all")}>
        All
      </button>
      <button
        className="filter__task--active"
        onClick={() => updateFilter("active")}
      >
        Active
      </button>
      <button
        className="filter__task--complete"
        onClick={() => updateFilter("completed")}
      >
        Completed
      </button>
    </section>
  );
}
