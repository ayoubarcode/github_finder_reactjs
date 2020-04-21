import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const TaskItem = ({task: {id,title, created}}) => {
    return (
        <div className="card text-center">
            <Link to={`/task/${id}`}>{title} </Link>
            <p>created at : {created}</p>
        </div>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskItem;
