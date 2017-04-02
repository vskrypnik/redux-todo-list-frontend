import cookies from 'js-cookie'

import forIn from 'lodash/forIn'
import pickBy from 'lodash/pickBy'
import isEmpty from 'lodash/isEmpty'
import transform from 'lodash/transform'

const getHeadersFromCookies = () => {
  const callback = (state, key) => (
		state[key] = cookies.get(key)
	)

  const names = [
    'access-token',
    'client',
    'uid'
  ]

  const headers = transform(
		names, callback, {}
	)

  return pickBy(headers, (value) => (
		value && value !== 'null'
	))
}

const initialState = getHeadersFromCookies()

export default (state = initialState, { meta }) => {
  const headers = meta && meta.headers

  forIn(headers, (value, key) => {
    cookies.set(key, value)
  })

  if (headers && !isEmpty(headers)) {
    return headers
  }

  return state
}
