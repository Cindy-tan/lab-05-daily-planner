import React from 'react';
import styles from './Task.module.css'

function Task({ task, index, toggleTaskDone, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className={styles.list}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskDone(index)}
        disabled={task.completed}
      />
      <span className={task.completed ? styles.completed : ''}>
        {task.name}
      </span>

      <button onClick={() => deleteTask(index)} className={styles.removeBtn}>Remove</button>
    </li>
  );
}

export default Task;
