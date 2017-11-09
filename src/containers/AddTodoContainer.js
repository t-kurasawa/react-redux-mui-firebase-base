import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoComponent from '../components/AddTodoComponent'

import {firebaseDb} from '../firebase/'

const mapStateToProps = (state) => {
  console.log("+++++ AddTodoContainer mapStateToProps")
  return state;
};

const mapDispatchToProps = (dispatch) => {
  console.log("+++++ AddTodoContainer mapDispatchToProps")
  return {
    addTodo: (text) => {
      console.log("+++++ AddTodoContainer mapDispatchToProps addTodo")
      firebaseDb.ref('todos').push({
        text: text,
        completed: false,
      })
    }
  }
};

const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);

export default AddTodoContainer;
