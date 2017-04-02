import first from 'lodash/first'
import values from 'lodash/values'

export default (state = null, action = {}) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
    case 'SIGN_UP_SUCCESS':
    case 'VALIDATE_TOKEN_SUCCESS': {
      const entities = action.payload.entities
      const users = values(entities.users)
      return first(users)
    }
    default:
      return state
  }
}
