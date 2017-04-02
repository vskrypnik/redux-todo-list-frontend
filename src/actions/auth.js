import api from 'http-client'

export const validateToken = () => api.get({
  endpoint: '/api/v1/auth/validate_token',
  normalize: true,

  types: [
    'VALIDATE_TOKEN_REQUEST',
    'VALIDATE_TOKEN_SUCCESS',
    'VALIDATE_TOKEN_FAILURE'
  ]
})

export const signIn = (user) => api.post({
  endpoint: '/api/v1/auth/sign_in',
  normalize: true,
  body: user,

  types: [
    'SIGN_IN_REQUEST',
    'SIGN_IN_SUCCESS',
    'SIGN_IN_FAILURE'
  ]
})

export const signUp = (user) => api.post({
  endpoint: '/api/v1/auth',
  normalize: true,
  body: user,

  types: [
    'SIGN_UP_REQUEST',
    'SIGN_UP_SUCCESS',
    'SIGN_UP_FAILURE'
  ]
})
