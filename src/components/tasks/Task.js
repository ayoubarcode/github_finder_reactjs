import React, { useEffect, useContext} from 'react'
import TaskContext from './../../context/tasks/taskContext'

const Task = ({match}) => {
    const taskContext = useContext(TaskContext)
    const { getSingleTask,task }  = taskContext
    useEffect(() => {
        getSingleTask(match.params.id)
    }, [])

    return (
        <div>
            <h1>{task.id}</h1>
        </div>
    )
}
export default Task