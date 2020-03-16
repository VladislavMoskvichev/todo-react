import React, {Component} from 'react'
import Todo from "./Todo";

class TodoCollection extends Component {
    render() {
        return (
            <ul className="todoList">
                {this.props.todos.todos.map(todo => <Todo deleteTodo={this.props.deleteTodo}
                                                          key={todo.id}
                                                          id={todo.id}
                                                          text={todo.text}
                                                          isDone={todo.isDone}
                />)}
            </ul>
        )
    }
}

export default TodoCollection;