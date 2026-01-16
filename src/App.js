import { useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      { id: Date.now(), text, completed: false },
      ...todos,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <h1 className="text-center my-4">To-Do App</h1>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
