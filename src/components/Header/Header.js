import React from 'react'

const Header = ({ toggleTasks, tasktoggle }) => {
    return (
        <div className='container d-flex border border-dark'>
            <h2 className='col-9 text-left'>TaskTracker</h2>
            <button
                className='col-3'
                onClick={toggleTasks}>
                {tasktoggle ? 'Hide Form' : 'Show Form'}
                 </button>
        </div>
    )
}

export default Header
