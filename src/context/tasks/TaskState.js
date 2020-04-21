import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import axios from 'axios'
import {
    GET_TASKS,
    GET_SINGLE_TASK
} from './../types'


const TaskState = props => {
    const initialState = {
        tasks:[],
        task:{}
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    // get all tasks 
    const getTasks = async() => {
        // setLoading()
        const response = await axios.get('/api/tasks')

        dispatch({
            type:GET_TASKS,
            payload:response.data
        })

    }


    // get single task
    const getSingleTask = async (id) => {
        const response = await axios.get(`/api/task/${id}`)
        dispatch({
            type:GET_SINGLE_TASK,
            payload: response.data
        })
    } 



    return <TaskContext.Provider 
            value={{
                tasks: state.tasks,
                task:state.task,
                getTasks,
                getSingleTask
            }}
            >
        { props.children}
    </TaskContext.Provider>

}


export default TaskState