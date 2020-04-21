import React, {useEffect, useContext } from 'react'
import TaskItem from './TaskItem'
import TaskContext from './../../context/tasks/taskContext'



const Tasks  = () =>  {
    const taskContext = useContext(TaskContext)
    const  { getTasks , tasks} = taskContext

    useEffect(() => {
        getTasks()
    }, [])

  

        return (
            <div style={taskStyle}>
                {tasks.map(task => ( 
                    <TaskItem key={task.id} task={task} /> 
                ))}
             </div>
        );
    }




const taskStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap:'1rem',
    justifyContent:"space-between"

}

export default Tasks;
