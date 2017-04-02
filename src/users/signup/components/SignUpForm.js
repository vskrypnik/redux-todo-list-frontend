import { Link } from 'react-router'
import React, { PropTypes } from 'react'

import { withError } from 'utilities/validators'
import { isEmail, minLength, isRequired } from 'validators'

import SemanticForm from 'common/components/SemanticForm'
import SemanticInput from 'common/components/SemanticInput'

const emailValidators = [
  withError(isRequired, 'Email address can\'t be blank!'),
  withError(isEmail, 'It doesn\'t look like an email!')
]

const passwordValidators = [
  withError(isRequired, 'Password can\'t be blank!'),
  withError(minLength(8), 'It should have 8 symbols or more!')
]

const passwordConfirmationValidators = [
  withError(isRequired, 'Password confirmation can\'t be blank!'),
  withError(minLength(8), 'It should have 8 symbols or more!')
]

const SignUpForm = ({ handleSubmit }) => (
  <div>
    <div className='text-center'>
      <div className='page-header'>
        <h3>Sign up</h3>
      </div>
    </div>

    <SemanticForm handleSubmit={handleSubmit}>
      <SemanticInput
        type='text' name='email'
        validate={emailValidators}
        placeholder='Your email address'
      />

    <SemanticInput
        placeholder='Your password'
        validate={passwordValidators}
        type='password' name='password'
      />

    <SemanticInput
        type='password'
        name='passwordConfirmation'
        placeholder='Your password again'
        validate={passwordConfirmationValidators}
      />

      <button className='ui fluid button'>
        Sign up
      </button>
    </SemanticForm>

    <div className='text-center'>
      <Link to='/signin'>
        Already have an account? Sign in
      </Link>
    </div>
  </div>
)

SignUpForm.propTypes = {handleSubmit: PropTypes.func.isRequired}

export default SignUpForm
