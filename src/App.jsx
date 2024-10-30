import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function DayPlannerApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // added for lab 5

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const remainingTasksCount = tasks.filter((task) => !task.completed).length;
  

  // added for lab 5
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  })

  return (
    <div className="formContainer">
      <h1>Daily Planner</h1>
      
      <TaskForm addTask={addTask} />
      <br/>
  
      <div>
        <button onClick={() => setFilter('all')} className='filterBtn'> All </button>
        &nbsp;
        <button onClick={() => setFilter('completed')} className='filterBtn'> Completed </button>
        &nbsp;
        <button onClick={() => setFilter('pending')} className='filterBtn'> Pending </button>
      </div>
      <h2>You have {remainingTasksCount} tasks remaining </h2>
      <br/>
      
      <ul>
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleTaskDone={toggleTaskDone}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default DayPlannerApp;
