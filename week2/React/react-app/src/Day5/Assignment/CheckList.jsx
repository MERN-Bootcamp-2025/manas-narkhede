// components/Checklist.jsx
import React, { useState } from 'react';
import './CheckList.css';

const defaultTasks = [
  { id: 1, text: 'Complete registration form', done: false },
  { id: 2, text: 'Upload medical reports', done: false },
  { id: 3, text: 'Schedule appointment', done: false },
  { id: 4, text: 'Consultation follow-up', done: false },
  { id: 5, text: 'Feedback and rating', done: false }
];

const Checklist = () => {
  const [tasks, setTasks] = useState(defaultTasks);

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const markAllComplete = () => {
    setTasks(prev => prev.map(task => ({ ...task, done: true })));
  };

  const clearAll = () => {
    setTasks(prev => prev.map(task => ({ ...task, done: false })));
  };

  const completedCount = tasks.filter(task => task.done).length;

  return (
    <div className="checklist-container">
      <h2>✅ Patient Checklist</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`task-item ${task.done ? 'done' : ''}`}
            onClick={() => toggleTask(task.id)}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>

      <div className="task-controls">
        <p>{completedCount} of {tasks.length} tasks completed</p>
        <button onClick={markAllComplete}>Mark All Complete</button>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default Checklist;
