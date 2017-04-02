import React, { PropTypes } from 'react'
import { Label } from 'semantic-ui-react'

const SemanticErrors = ({ text }) => (
  <Label basic color='red' pointing>
    {text}
  </Label>
)

SemanticErrors.propTypes = {
  text: PropTypes.string.isRequired
}

export default SemanticErrors
