import {firebaseDb} from '../firebase/'

export const loadTodo = () => {
  console.log("+++++ TodoAction loadTodo")
  return dispatch => {
      firebaseDb.ref('todos').off()
      firebaseDb.ref('todos').on('value',
        (snapshot) => {dispatch(loadTodoSuccess(snapshot))},
        (error) => {console.log(error)}
      )
  }
}

export const loadTodoSuccess = (snapshot) => {
  console.log("+++++ TodoAction loadTodoSuccess")
  return {
    type: 'LOAD_TODO',
    data: snapshot.val()
  }
}

export const setVisibilityFilter = filter => {
  console.log("+++++ TodoAction setVisibilityFilter")
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = key => {
  console.log("+++++ TodoAction toggleTodo")
  return {
    type: 'TOGGLE_TODO',
    key
  }
}
