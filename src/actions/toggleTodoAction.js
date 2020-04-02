import {TOGGLE_TODO_SUCCESS} from "../constants";

export function toggleTodoSuccess(id) {
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload: {
            id
        }
    }
}