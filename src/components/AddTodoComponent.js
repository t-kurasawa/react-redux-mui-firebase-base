import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

console.log("+++++ AddTodoComponent")

class AddTodoComponent extends React.Component {
    render() {
      console.log("+++++ AddTodoComponent render")
      return (
        <div>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
            ref="inputText"
          />
          <RaisedButton 
            label="Add Todo" 
            primary={true}
            onClick={() => {this.props.addTodo(this.refs.inputText.getValue())}}
          />
        </div>
      );
    }
  };

export default AddTodoComponent;