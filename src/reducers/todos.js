import clone from 'lodash/clone'
import values from 'lodash/values'
import pickBy from 'lodash/pickBy'
import sortBy from 'lodash/sortBy'
import transform from 'lodash/transform'

import { combineReducers } from 'redux'

const entities = (state = {}, action = {}) => {
  switch (action.type) {
    case 'LOAD_TODO_SUCCESS':
    case 'LOAD_TODOS_SUCCESS':
    case 'LOAD_PROJECTS_SUCCESS':
      return {...state, ...action.payload.entities.todos}
    case 'DESTROY_PROJECT_SUCCESS':
      return pickBy(state, ({ project }) => (
        project !== action.payload.id
      ))
    case 'DESTROY_TODO_SUCCESS':
      return pickBy(state, ({ id }) => (
        id !== action.payload.id
      ))
    case 'UPDATE_TODOS_PROPERTIES':
      return transform(action.todos, (state, props, id) => {
        state[id] = {...state[id], ...props}
      }, clone(state))
    default:
      return state
  }
}

export default combineReducers({entities})

export const getTodos = (state) => (
  sortBy(values(state.todos.entities),
    ['done', 'priority']
  )
)

export const getTodoById = (state, id) => (
  state.todos.entities[id]
)

export const getTodosByProjectId = (state, projectId) => (
  getTodos(state).filter((todo) => todo.project === projectId)
)
