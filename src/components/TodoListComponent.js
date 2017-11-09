import React from 'react'
import PropTypes from 'prop-types'
import TodoComponent from './TodoComponent'

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

console.log("+++++ TodoListComponent")

class TodoListComponent extends React.Component {
  render(){
    console.log("+++++ TodoListComponent render")
    const { todos, updateTodo, loadTodo } = this.props;
        
    return(
      <List>
        <Subheader>Todo List</Subheader>  
        {todos.map(todo => (
          <TodoComponent key={todo.key} {...todo} onClick={() => updateTodo(todo)} />
        ))}
      </List>
    )
  }
  // onload の効力
  componentDidMount() {
    console.log("+++++ TodoListComponent componentDidMount");
    this.props.loadTodo();
  }
      
}

TodoListComponent.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  updateTodo: PropTypes.func.isRequired,
  loadTodo: PropTypes.func.isRequired
}


export default TodoListComponent