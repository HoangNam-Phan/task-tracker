import React, { useState } from 'react';
import Header from './components/Header/Header'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'


function App() {

  const [tasktoggle, setTasktoggle] = useState(true);

  const toggleTasks = () => {
    setTasktoggle(!tasktoggle);
  }

  const [tasks, setTasks] = useState([
    {
      taskName: 'Clean room',
      time: 'Today',
      id: 1
    },
    {
      taskName: 'Walk dog',
      time: 'April 16th at 2:30pm',
      id: 2
    },
    {
      taskName: 'Buy groceries',
      time: 'May 8th at 7:30pm',
      id: 3
    }
  ])

  const addTask = (text, time, id) => {
    if(text === '' || time === ''){
      alert('Enter a task and time')
    }
    else {
    const newTask = {
      taskName: text,
      time: time,
      id: id
    }
    setTasks([...tasks, newTask])}
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className='mainContainer'>
      <Header toggleTasks={toggleTasks} tasktoggle={tasktoggle}/>
      {tasktoggle && <TaskForm tasks={tasks} addTask={addTask} />}
      {tasks.length > 0 ? <TaskList tasks={tasks} deleteTask={deleteTask} /> : 'Nothing to see here'}
    </div>
  );
}

export default App;
