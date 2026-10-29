
import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: task.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");
  };

  // Check or uncheck a task
  const handleCheckbox = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };
   
  const completedCount = tasks.filter(
    (item) => item.completed
  ).length;

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task Management App</h1>

        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        <h3>
          Completed Tasks: {completedCount} / {tasks.length}
        </h3>

        <ul className="task-list">
          {tasks.map((item) => (
            <li key={item.id} className="task-item">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckbox(item.id)}
              />

              <span
                className={
                  item.completed ? "completed" : ""
                }
              >
                {item.name}
              </span>

              {item.completed && (
                <span className="success-message">
                  Task Completed!
                </span>
              )}
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="empty-message">
            No tasks yet. Add your first task!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;