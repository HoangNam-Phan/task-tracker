import React, { useState } from 'react'

const Task = ({ task, deleteTask }) => {

    const [reminder, setReminder] = useState(false)

    const toggleReminder = () => {
        setReminder(!reminder);
        console.log(reminder);
    }


    return (
        <div>
            <div className={reminder ? ' taskEl d-flex flex-column align-items-start remind' : `taskEl d-flex flex-column align-items-start `}
                onDoubleClick={toggleReminder}>
                <div className='container d-flex row justify-content-between'>
                    <b>{task.taskName}</b>
                    <button className='btn btn-danger' onClick={() => deleteTask(task.id)}>x</button>
                </div>
                {task.time}

            </div>
        </div>
    )
}

export default Task
