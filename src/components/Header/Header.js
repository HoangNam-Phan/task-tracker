import React from 'react'

const Header = ({ toggleTasks, tasktoggle }) => {
    return (
        <div className='header container-fluid d-flex py-2'>
            <h2 className='col-9 text-left'>TaskTracker</h2>
            <button
                className='btn btn-primary col-3'
                onClick={toggleTasks}>
                {tasktoggle ? 'Hide' : 'Show'}
                 </button>
        </div>
    )
}

export default Header
