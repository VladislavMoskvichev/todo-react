import {DELETE_TODO, DELETE_TODO_STARTED} from "../constants";

export function deleteTodoStarted() {
    return {type: DELETE_TODO_STARTED}
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}