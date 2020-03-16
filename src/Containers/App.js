import React, {Component} from "react";
import './App.css';
import {connect} from "react-redux";
import TodoCollection from "../Components/TodoCollection";
import {addTodoAction, deleteTodoAction, loadTodosAction} from "../actions/actionCreators";

class App extends Component {
    onHandleSubmit = e => {
        e.preventDefault();
        this.props.addTodoAction(this.props.todos.text);
        this.props.loadTodosAction()
    };

    getText = e => {
        this.props.todos.text = e.currentTarget.value;
        console.log(this.props.todos.text);
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onHandleSubmit}>
                    <input onChange={this.getText} className="put" type="text"/>
                    <button>ADD TODO</button>
                </form>
                <TodoCollection todos={this.props.todos}
                                deleteTodo={this.props.deleteTodoAction}
                                loadTodos={this.props.loadTodosAction}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        todos: store.todos,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loadTodosAction: () => dispatch(loadTodosAction()),
        addTodoAction: text => dispatch(addTodoAction(text)),
        deleteTodoAction: id => dispatch(deleteTodoAction(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

