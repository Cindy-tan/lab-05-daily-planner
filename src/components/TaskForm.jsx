import React, { useState } from 'react';
import styles from './TaskForm.module.css'

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new task ..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className={styles.placeholder}
      />
      &nbsp;
      &nbsp;
      <button type="submit" className={styles.saveBtn}>Save</button>
    </form>
  );
}

export default TaskForm;
