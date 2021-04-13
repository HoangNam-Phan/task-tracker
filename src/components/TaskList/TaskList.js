import React from 'react'
import Task from '../Task/Task'

const TaskList = ({ tasks, deleteTask }) => {

    return (
        <div className=''>
            {tasks.map(task => {
                return <Task task={task} deleteTask={deleteTask}/>
            })}
        </div>
    )
}

export default TaskList
