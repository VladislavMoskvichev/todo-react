import {TOGGLE_TODO_SUCCESS} from "../constants";

export function toggleTodoSuccess(todo) {
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload: {
            todo
        }
    }
}