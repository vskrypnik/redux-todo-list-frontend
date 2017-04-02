import api from 'http-client'

export const loadProjects = () => api.get({
  endpoint: '/api/v1/projects',
  normalize: true,

  types: [
    'LOAD_PROJECTS_REQUEST',
    'LOAD_PROJECTS_SUCCESS',
    'LOAD_PROJECTS_FAILURE'
  ]
})

export const loadProject = ({ id }) => api.get({
  endpoint: `/api/v1/projects/${id}`,
  normalize: true,

  types: [
    'LOAD_PROJECT_REQUEST',
    'LOAD_PROJECT_SUCCESS',
    'LOAD_PROJECT_FAILURE'
  ]
})

export const createProject = (project) => api.post({
  endpoint: '/api/v1/projects', body: {project},

  types: [
    'CREATE_PROJECT_REQUEST',
    'CREATE_PROJECT_SUCCESS',
    'CREATE_PROJECT_FAILURE'
  ]
})

export const patchProject = (project) => api.patch({
  endpoint: `/api/v1/projects/${project.id}`, body: {project},

  types: [
    'PATCH_PROJECT_REQUEST',
    'PATCH_PROJECT_SUCCESS',
    'PATCH_PROJECT_FAILURE'
  ]
})

export const destroyProject = ({ id }) => api.delete({
  endpoint: `/api/v1/projects/${id}`, args: {id},

  types: [
    'DESTROY_PROJECT_REQUEST',
    'DESTROY_PROJECT_SUCCESS',
    'DESTROY_PROJECT_FAILURE'
  ]
})
