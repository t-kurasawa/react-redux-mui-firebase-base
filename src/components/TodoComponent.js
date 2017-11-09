import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';

console.log("+++++ TodoComponent")

class TodoComponent extends React.Component {
  render(){
    console.log("+++++ TodoComponent render")
    const { onClick, completed, text } = this.props;
    return(
      <div>
        <ListItem
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
          primaryText={text}
          rightToggle={<Toggle onToggle={onClick} defaultToggled={completed}/>}
        />
        <Divider />
      </div>
    )
  }
}

TodoComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoComponent