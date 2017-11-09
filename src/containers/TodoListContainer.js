import { connect } from 'react-redux'
import { loadTodo } from '../actions'
import TodoListComponent from '../components/TodoListComponent'

import {firebaseDb} from '../firebase/'

const getVisibleTodos = (todos, filter) => {
  console.log("+++++ TodoListContainer getVisibleTodos")
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  console.log("+++++ TodoListContainer mapStateToProps")
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  console.log("+++++ TodoListContainer mapDispatchToProps")
  return {
    updateTodo: todo => {
      console.log("+++++ TodoListContainer mapDispatchToProps updateTodo")
      firebaseDb.ref(`todos/${todo.key}`).update({completed: !todo.completed})
    },
    loadTodo: () => {
      console.log("+++++ TodoListContainer mapDispatchToProps loadTodo")
      dispatch(loadTodo())
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent)

export default TodoListContainer