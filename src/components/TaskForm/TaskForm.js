import React,{ useState } from 'react';

const TaskForm = ( { tasks, addTask } ) => {

    const [ text, setText ] = useState('');
    const [ time, setTime ] = useState('');
    let [ id, setId ] = useState(4);

    const generateID = () => {
        setId(id= id + 1);
        return id;
    }

    return (
        <div className='container border border-dark p-0'>
            <div className='container d-flex flex-column align-items-start'>
                <label htmlFor="task">Task</label>
                <input type="text" placeholder='Add Task' 
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='container d-flex flex-column align-items-start'>
                <label htmlFor="time">Day & Time</label>
                <input type="text" placeholder='Add Day & Time'
                value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>
            <button onClick={() => addTask(text,time,generateID())}>Add Task</button>
        </div>
    )
}

export default TaskForm