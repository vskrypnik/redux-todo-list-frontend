import { push } from 'react-router-redux'
import { reduxForm, untouch } from 'redux-form'

import { signUp } from 'actions/auth'

import SignUpForm from 'users/signup/components/SignUpForm'

const validate = ({ password, passwordConfirmation }) => ({
  passwordConfirmation: password === passwordConfirmation ?
    undefined : 'Passwords must be the same!'
})

const onSubmit = (user, dispatch) => {
  dispatch(signUp(user)).then(({ error }) => {
    if (!error) dispatch(push('/'))
  })
}

const onSubmitFail = (_, dispatch) => {
  dispatch(untouch('user',
    'email', 'password',
    'passwordConfirmation'
  ))
}

export default reduxForm({
  form: 'user',
  validate,
  onSubmit,
  onSubmitFail
})(SignUpForm)
