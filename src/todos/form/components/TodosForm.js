import { Link } from 'react-router'
import React, { PropTypes } from 'react'

import { isRequired } from 'validators'
import { withError } from 'utilities/validators'

import SemanticForm from 'common/components/SemanticForm'
import SemanticInput from 'common/components/SemanticInput'

const nameValidators = withError(
  isRequired, 'Todo name can\'t be blank!'
)

const TodosFormUpdate = ({ titleText, buttonText, handleSubmit }) => (
  <div>
    <div className='text-center'>
      <div className='page-header'>
        <h3>{titleText}</h3>
      </div>
    </div>

    <SemanticForm handleSubmit={handleSubmit}>
      <SemanticInput
        autoFocus
        type='text' name='name'
        validate={nameValidators}
        placeholder='What needs to be done?'
      />

      <button className='ui fluid button'>
        {buttonText}
      </button>
    </SemanticForm>

    <div className='text-center'>
      <Link to='/dashboard'>
        Go back to dashboard
      </Link>
    </div>
  </div>
)

TodosFormUpdate.propTypes = {
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default TodosFormUpdate
