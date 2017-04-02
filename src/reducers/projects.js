import values from 'lodash/values'
import pickBy from 'lodash/pickBy'

import { combineReducers } from 'redux'

const entities = (state = {}, action = {}) => {
  switch (action.type) {
    case 'LOAD_PROJECT_SUCCESS':
    case 'LOAD_PROJECTS_SUCCESS':
      return {...state, ...action.payload.entities.projects}
    case 'DESTROY_PROJECT_SUCCESS':
      return pickBy(state, ({ id }) => (
        id !== action.payload.id
      ))
    default:
      return state
  }
}

export default combineReducers({entities})

export const getProjects = (state) => (
  values(state.projects.entities)
)

export const getProjectById = (state, id) => (
  state.projects.entities[id]
)
