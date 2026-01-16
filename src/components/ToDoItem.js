import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") return;

    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
      )}

      <div>
        {isEditing ? (
          <>
            <button
              className="btn btn-sm btn-success me-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.text);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
