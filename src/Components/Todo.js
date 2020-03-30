import React, {Component, createRef} from 'react';

class Todo extends Component {
    constructor(){
        super();
        this.checkboxInput = createRef();
    }

    delTodo = e => {
        this.props.delTodo(e.currentTarget.id)
    };

    toggleTodo = e => {
        this.props.toggleTodo(e.currentTarget.id);
    };

    render() {
        return (
            <div className="todo-wrap">
                <li id={this.props.id} className="todo">
                    {this.props.text}
                    <input ref={this.checkboxInput} onChange={this.toggleTodo} id={this.props.id} type="checkbox"/>
                </li>
                <div onClick={this.delTodo} id={this.props.id} className="delete-btn">
                    DEL
                </div>
            </div>
        )
    }
}

export default Todo;