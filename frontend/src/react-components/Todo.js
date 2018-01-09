import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from 'material-ui/List';

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none',
      textAlign: 'left'
    }}
  >
    {text}
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo