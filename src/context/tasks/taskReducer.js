import {
    GET_TASKS,
    GET_SINGLE_TASK
} from './../types'

const TaskReducer = (state, action) => {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks:action.payload
            };
        
        case GET_SINGLE_TASK:
            return {
                ...state,
                task:action.payload
            }
        default:
            return state
    }
}

export default TaskReducer;