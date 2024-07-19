// child component aka filter to count active complete and all task

export default function Footer() {
  return (
    <footer className="filter">
      <p>Total </p>

      <div className="filter__task">
        <div className="filter__task--total">All Task</div>
        <div className="filter__task--active">Active</div>
        <div className="filter__task--completed">Completed</div>
      </div>

      <p>Clear completed</p>
    </footer>
  );
}
