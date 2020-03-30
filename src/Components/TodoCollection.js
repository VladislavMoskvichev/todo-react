import React, {Component} from 'react'
import Todo from "./Todo";

class TodoCollection extends Component {

    render() {
        return (
            <ul className="todo-list">
                {this.props.isFetching ? <p>Загрузка...</p> :
                    this.props.todos.map(todo => <Todo isDone={todo.isDone}
                                                       text={todo.text}
                                                       id={todo._id}
                                                       key={todo._id}
                                                       delTodo={this.props.delTodo}
                                                       toggleTodo={this.props.toggleTodo}
                    />)}
            </ul>
        )
    }
}

export default TodoCollection;