/* global process */

import pickBy from 'lodash/pickBy'
import transform from 'lodash/transform'
import { CALL_API } from 'redux-api-middleware'
import { normalize as _normalize } from 'normalizer'

const makeAction = (method, options) => {
  const { body, headers, types, normalize, args, ...rest } = options

  const endpoint = process.env.REACT_APP_BACKEND_URL + options.endpoint

  return {
    [CALL_API]: {
      ...rest,

      endpoint,

      types: [
        types[0],
        {
          type: typeof types[1] === 'string' ? types[1] : types[1].type,

          meta: (action, state, response) => {
            const keys = ['access-token', 'uid', 'client']

            const headers = transform(keys, (headers, key) => {
              headers[key] = response.headers.get(key)
            }, {})

            return {headers: pickBy(headers, (value) => !!value)}
          },

          payload: (action, state, response) => {
            const contentType = response.headers.get('Content-Type')

            if (method === 'DELETE') {
              return args
            }

            if (contentType && ~contentType.indexOf('json')) {
              return response.json().then((json) => (
                normalize ? _normalize(json) : json
              ), () => {})
            }
          }
        },
        types[2]
      ],

      body: body instanceof window.FormData ? body : JSON.stringify(body),

      headers: (store) => {
        let defaultHeaders = {}

        if (!(body instanceof window.FormData)) {
          defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }

        return {
          ...defaultHeaders,
          ...store.headers,
          ...headers
        }
      },

      method,

      credentials: 'include'
    }
  }
}

const methods = ['get', 'post', 'put', 'patch', 'delete', 'head']

export default transform(methods, (result, method) => {
  result[method] = (options) => makeAction(
    method.toUpperCase(), options
  )
}, {})
