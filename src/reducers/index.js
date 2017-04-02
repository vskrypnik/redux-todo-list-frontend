import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import user from 'reducers/user'
import todos from 'reducers/todos'
import headers from 'reducers/headers'
import projects from 'reducers/projects'

export default combineReducers({
  user,
  form,
  todos,
  headers,
  projects
})
