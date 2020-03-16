import {ADD_TODO, DELETE_TODO, LOAD_TODOS} from "../actions/actionCreators";

export const initialState = {
    todos: [],
    text: ''
};

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TODOS:
            return {...state, todos: action.payload};
        case ADD_TODO:
            return {...state, text: action.text, isDone: action.isDone};
        case DELETE_TODO:
            return {...state, id: action.id};
        default:
            return state;
    }
}

// case TOGGLE_TODO:
//     return state.map(todo => (todo.id === action.id)
//         ? {...todo, isDone: !todo.isDone}
//         : todo
//     );

// case DELETE_TODO:
//     return state.filter(todo => todo.id !== action.id);
