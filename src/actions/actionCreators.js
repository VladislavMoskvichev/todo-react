import axios from "axios";
import {url} from "../constants";
import {deleteTodo, deleteTodoStarted} from "./deleteTodoAction";
import {toggleTodoSuccess} from "./toggleTodoAction";
import {addTodoFail, addTodoStarted, addTodoSuccess} from "./addTodoAction";
import {loadTodosFail, loadTodosStarted, loadTodosSuccess} from "./loadTodosAction";

export const addTodo = text => dispatch => {
    dispatch(addTodoStarted());

    axios
        .post(url, {
            text,
            isDone: false
        })
        .then(response => {
            dispatch(addTodoSuccess(response.data))
        })
        .catch(error => {
            dispatch(addTodoFail(error))
        })
};

export const loadTodos = () => dispatch => {
    dispatch(loadTodosStarted());

    axios
        .get(url)
        .then(response => {
            dispatch(loadTodosSuccess(response.data))
        })
        .catch(error => {
            dispatch(loadTodosFail(error))
        })
};

export const delTodo = id => dispatch => {
    dispatch(deleteTodoStarted());

    axios
        .delete(`${url}/${id}`)
        .then(response => {
            dispatch(deleteTodo(id))
        })
};

export const toggleTodo = id => dispatch => {
    axios
        .put(`${url}/${id}`, {
        })
        .then(response => {
            dispatch(toggleTodoSuccess(response.data));
        })
};


