import { PropTypes } from 'react'

export default PropTypes.shape({
  deadline: PropTypes.string,

  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
})
