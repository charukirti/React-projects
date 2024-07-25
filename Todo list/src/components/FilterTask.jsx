export default function FilterTask() {
  return (
    <section className="filter__tasks">
      <button className="filter__task--all">All</button>
      <button className="filter__task--active">Active</button>
      <button className="filter__task--complete">Completed</button>
    </section>
  );
}
