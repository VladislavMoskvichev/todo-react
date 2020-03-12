import React, {Component} from "react";
import './App.css';
import {connect} from "react-redux";
import {addTodo} from "../actions/addTodoAction";
import {toggleTodo} from "../actions/toggleTodoAction";
import TodoCollection from "../Components/TodoCollection";

class App extends Component {

    clickHandleChange = e => {
        e.preventDefault();
        this.props.addTodo(this.props.todos.text);
    };

    getText = e => {
        this.props.todos.text = e.currentTarget.value;
    };

    render() {
        const {todos, addTodo, toggleTodo} = this.props;
        return (
            <div className="App">
                <h1>TODO APP</h1>
                <form onSubmit={ this.clickHandleChange }>
                    <input value={todos.text} onChange={ this.getText } className="put" type="text"/>
                    <button className="push-btn">Push</button>
                </form>
                {todos.length > 0 ? <TodoCollection todos={todos} addTodo={addTodo} toggleTodo={toggleTodo}/> : <p>Список пуст</p>}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        todos: store.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text)),
        toggleTodo: id => dispatch(toggleTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

