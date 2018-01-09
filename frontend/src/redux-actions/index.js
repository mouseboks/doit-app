
/*
 * action types
 */
export const Actions = { ADD_TODO: 'ADD_TODO',
TOGGLE_TODO: 'TOGGLE_TODO',
SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: Actions.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: Actions.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: Actions.TOGGLE_TODO,
    id
  }
}