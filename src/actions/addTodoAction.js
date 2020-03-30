import {ADD_TODO_FAIL, ADD_TODO_STARTED, ADD_TODO_SUCCESS} from "../constants";

export function addTodoStarted() {
    return { type: ADD_TODO_STARTED }
}
export function addTodoSuccess(todo) {
    return {
        type: ADD_TODO_SUCCESS,
        payload: {
            todo
        }
    }
}
export function addTodoFail(error) {
    return {
        type: ADD_TODO_FAIL,
        payload: {
            error
        }
    }
}