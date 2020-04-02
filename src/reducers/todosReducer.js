import {
    ADD_TODO_FAIL,
    ADD_TODO_STARTED,
    ADD_TODO_SUCCESS, DELETE_TODO, DELETE_TODO_STARTED,
    LOAD_TODOS_FAIL,
    LOAD_TODOS_STARTED,
    LOAD_TODOS_SUCCESS, TOGGLE_TODO_SUCCESS
} from "../constants";

export const initialState = {
    todos: [],
    isFetching: false,
    error: null
};

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_STARTED:
            return {
                ...state,
                isFetching: true
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                todos: [...state.todos, action.payload.todo.data]
            };
        case ADD_TODO_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case LOAD_TODOS_STARTED:
            return {
                ...state,
                isFetching: true
            };
        case LOAD_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                todos: action.payload.todos
            };
        case LOAD_TODOS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case DELETE_TODO_STARTED:
            return {
                ...state,
                isFetching: true
            };
        case DELETE_TODO:
            return {
                ...state,
                isFetching: false,
                todos: state.todos.filter(todo => todo._id !== action.payload.id)
            };
        case TOGGLE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload.id){
                        todo.isDone = !todo.isDone
                    }
                    return todo
                })
            };
        default:
            return state
    }
}
