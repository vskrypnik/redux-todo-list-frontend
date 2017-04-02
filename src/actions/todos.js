import api from 'http-client'

export const loadTodos = ({ projectId }) => api.get({
  endpoint: `/api/v1/projects/${projectId}/todos`,
  normalize: true,

  types: [
    'LOAD_TODOS_REQUEST',
    'LOAD_TODOS_SUCCESS',
    'LOAD_TODOS_FAILURE'
  ]
})

export const loadTodo = ({ id }) => api.get({
  endpoint: `/api/v1/todos/${id}`,
  normalize: true,

  types: [
    'LOAD_TODO_REQUEST',
    'LOAD_TODO_SUCCESS',
    'LOAD_TODO_FAILURE'
  ]
})

export const createTodo = ({ projectId, ...todo }) => api.post({
  endpoint: `/api/v1/projects/${projectId}/todos`, body: {todo},

  types: [
    'CREATE_TODO_REQUEST',
    'CREATE_TODO_SUCCESS',
    'CREATE_TODO_FAILURE'
  ]
})

export const patchTodo = (todo) => api.patch({
  endpoint: `/api/v1/todos/${todo.id}`, body: {todo},

  types: [
    'PATCH_TODO_REQUEST',
    'PATCH_TODO_SUCCESS',
    'PATCH_TODO_FAILURE'
  ]
})

export const destroyTodo = ({ id }) => api.delete({
  endpoint: `/api/v1/todos/${id}`, args: {id},

  types: [
    'DESTROY_TODO_REQUEST',
    'DESTROY_TODO_SUCCESS',
    'DESTROY_TODO_FAILURE'
  ]
})

export const updateTodosProperties = (todos) => ({
  type: 'UPDATE_TODOS_PROPERTIES', todos
})
