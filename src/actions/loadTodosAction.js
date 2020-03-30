import {LOAD_TODOS_FAIL, LOAD_TODOS_STARTED, LOAD_TODOS_SUCCESS} from "../constants";

export function loadTodosStarted() {
    return { type: LOAD_TODOS_STARTED }
}

export function loadTodosSuccess(todos) {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: {
            todos: todos.data
        }
    }
}

export function loadTodosFail(error) {
    return {
        type: LOAD_TODOS_FAIL,
        payload: {
            error
        }
    }
}