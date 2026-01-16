function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
