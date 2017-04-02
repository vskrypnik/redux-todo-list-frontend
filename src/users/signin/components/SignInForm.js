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

const SignInForm = ({ handleSubmit }) => (
  <div>
    <div className='text-center'>
      <div className='page-header'>
        <h3>Sign in</h3>
      </div>
    </div>

    <SemanticForm handleSubmit={handleSubmit}>
      <SemanticInput
        name='email' type='text'
        validate={emailValidators}
        placeholder='Your email address'
      />

    <SemanticInput
        placeholder='Your password'
        validate={passwordValidators}
        name='password' type='password'
      />

      <button className='ui fluid button'>
        Sign in
      </button>
    </SemanticForm>

    <div className='text-center'>
      <Link to='/signup'>
        Don't have an account? Sign up
      </Link>
    </div>
  </div>
)

SignInForm.propTypes = {handleSubmit: PropTypes.func.isRequired}

export default SignInForm
