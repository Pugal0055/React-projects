import React, { useState } from "react";
import "./TodoList.css";

const TodoList = ({ onToggleMode = () => {} }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isNightMode, setIsNightMode] = useState(false);
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoItems([...todoItems, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todoItems];
    updatedTodos.splice(index, 1);
    setTodoItems(updatedTodos);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleMode = () => {
    onToggleMode();
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`todo-list-container ${
        isNightMode ? "night-mode" : "bright-mode"
      }`}
    >
      <div className="mode-toggle">
        <button onClick={handleToggleMode}>
          {isNightMode ? (
            <i className="fas fa-sun icon"></i>
          ) : (
            <i className="fas fa-moon icon"></i>
          )}
        </button>
      </div>

      <h2>Todo List</h2>
      <div className="todo-input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-items">
        {todoItems.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="remove-button"
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
