import TodoItem from "./ToDoItem";

function TodoList({ todos = [], deleteTodo, toggleTodo }) {
  if (todos.length === 0) {
    return <p className="text-muted text-center">No tasks yet.</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
