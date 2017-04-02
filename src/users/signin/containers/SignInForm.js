import { push } from 'react-router-redux'
import { reduxForm, untouch } from 'redux-form'

import { signIn } from 'actions/auth'

import SignInForm from 'users/signin/components/SignInForm'

const onSubmit = (user, dispatch) => {
  dispatch(signIn(user)).then(({ error }) => {
    if (!error) dispatch(push('/'))
  })
}

const onSubmitFail = (_, dispatch) => {
  dispatch(untouch('user',
    'email', 'password'
  ))
}

export default reduxForm({
  form: 'user',
  onSubmitFail,
  onSubmit
})(SignInForm)
