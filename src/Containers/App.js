import React, {Component, createRef} from "react";
import './App.css';
import {connect} from "react-redux";
import {addTodo, delTodo, loadTodos, toggleTodo} from "../actions/actionCreators";
import TodoCollection from "../Components/TodoCollection";

class App extends Component {
    constructor(){
        super();
        this.textInput = createRef();
    }

     addTodo = e => {
        e.preventDefault();
        this.props.addTodoAction(this.textInput.current.value)
    };


    componentDidMount() {
        this.props.loadTodosAction();
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.addTodo}>
                    <input ref={this.textInput} className="input" type="text"/>
                    <button className="btn">ADD TODO</button>
                    <TodoCollection todos={this.props.todos.todos}
                                    isFetching={this.props.todos.isFetching}
                                    delTodo={this.props.deleteTodoAction}
                                    toggleTodo={this.props.toggleTodoAction}
                    />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoAction: text => dispatch(addTodo(text)),
        deleteTodoAction: id => dispatch(delTodo(id)),
        loadTodosAction: todos => dispatch(loadTodos(todos)),
        toggleTodoAction: id => dispatch(toggleTodo(id))
    }
};

const mapStateToProps = store => {
    return {
        todos: store.todos
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

