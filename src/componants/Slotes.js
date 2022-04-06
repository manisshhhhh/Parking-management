import React, { useState } from 'react';
import './slotes.css';
import './form.css';
import Slides from './Slides';
import Boxes from './Boxes';
import CountSlote from './CountSlote';
import Formhead from './Formhead';
import Tasks from './Tasks';
import AddTask from './AddTask';

const Slotes = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'Manish Yaday',
    //   vehicleNo: 'Rj28/1298',
    //   mobile: 23123492837,
    //   day: 'March 6th at 2:30 pm',
    //   duration: 4,
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: 'Akshd Yaday',
    //   vehicleNo: 'MH23/7384',
    //   mobile: 23123473846,
    //   day: 'March 1th at 1:30 pm',
    //   duration: 4,
    //   reminder: true,
    // },
    // {
    //   id: 3,
    //   text: 'Cnskd Yaday',
    //   vehicleNo: 'GJ76/8293',
    //   mobile: 23123437485,
    //   day: 'March 16th at 5:30 pm',
    //   duration: 4,
    //   reminder: false,
    // },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Slides />
      <Boxes />
      <CountSlote />
      <div className='container1'>
        <Formhead
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          <h3>Welcome to Parking Hub! You Can Book Here</h3>
        )}
      </div>
    </>
  );
};

export default Slotes;
