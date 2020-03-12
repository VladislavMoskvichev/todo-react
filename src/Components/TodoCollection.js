import React, {Component} from 'react'
import Todo from "./Todo";

class TodoCollection extends Component {
    render() {
        return (
            <ul className="todoList">
                {this.props.todos.map(todo => <Todo key={todo.id}
                                                    id={todo.id}
                                                    text={todo.text}
                                                    isDone={todo.isDone}
                                                    toggleTodo={this.props.toggleTodo}
                />)}
            </ul>
        )
    }
}

export default TodoCollection;