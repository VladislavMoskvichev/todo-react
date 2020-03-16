import axios from "axios";

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const loadTodosAction = () => {
    return async dispatch => {
        await axios.get("https://simple-api-todo.herokuapp.com/api/todo")
            .then(response => {
                dispatch({
                    type: LOAD_TODOS,
                    payload: response.data.data.map(todo => ({
                        text: todo.text,
                        id: todo._id,
                        isDone: todo.isDone
                    }))
                })
            })
    }
};

export const addTodoAction = text => {
    return async dispatch => {
       await axios.post("https://simple-api-todo.herokuapp.com/api/todo", {text, isDone: false})
            .then(response => {
                dispatch({
                    type: ADD_TODO,
                    text: text,
                    isDone: false
                })
            })
    }
};

export const deleteTodoAction = id => {
    return dispatch => {
        axios.delete(`https://simple-api-todo.herokuapp.com/api/todo/${id}`)
            .then(response => {
                dispatch({
                    type: DELETE_TODO,
                    id: response._id
                })
            })
    }
};
