import { Field } from 'redux-form'
import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { Input } from 'semantic-ui-react'

import SemanticError from 'common/components/SemanticError'

const showError = ({ invalid, active, touched, submitFailed }) => (
  invalid && !active && !touched && submitFailed
)

const wrapperClassName = (props) => classNames(
  'field', {'error': showError(props)}
)

const handleInputKeyPress = ({ target, key }) => {
  if (key === 'Enter') target.blur()
}

const SemanticInput = ({ input, meta, ...rest }) => (
  <div className={wrapperClassName(meta)}>
    <Input
      {...rest} {...input}
      error={showError(meta)}
      label={{icon: 'asterisk'}}
      labelPosition='right corner'
      onKeyPress={handleInputKeyPress}
    />

  {showError(meta) && <SemanticError text={meta.error} />}
  </div>
)

SemanticInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

const SemanticInputWrapper = (props) => (
  <Field {...props} component={SemanticInput} />
)

SemanticInputWrapper.propTypes = {
  name: PropTypes.string.isRequired
}

export default SemanticInputWrapper
