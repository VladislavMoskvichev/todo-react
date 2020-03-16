import React, {Component} from 'react';

class Todo extends Component {
    delTodo = e => {
        this.props.deleteTodo(e.currentTarget.id)
    };


    render() {
        return (
            <li id={this.props.id} onClick={this.delTodo} className="todo">
                {this.props.text}
                <input type="checkbox"/>
            </li>
        )
    }
}

export default Todo;