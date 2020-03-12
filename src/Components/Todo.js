import React, {Component} from 'react';

class Todo extends Component {
    completedStyle = {
        fontStyle: "italic",
        color: "black",
        textDecoration: "line-through"
    };

    toggleTodo = e => {
        this.props.toggleTodo(this.props.id)
    };

    render() {
        const { text, isDone } = this.props;
        return (
            <li className="todo">
                <p style={isDone ? this.completedStyle : null}>{text}</p>
                <input
                    onChange={this.toggleTodo}
                    checked={isDone}
                    type="checkbox"
                />
            </li>
        )
    }
}

export default Todo;