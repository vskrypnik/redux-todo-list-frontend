import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory as history } from 'react-router'
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router'

import { validateToken } from 'actions/auth'

import 'semantic-ui-css/semantic.min.css'

import store from 'store'

import TodoFormLayout from 'layouts/TodoFormLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import ProjectFormLayout from 'layouts/ProjectFormLayout'
import ApplicationLayout from 'layouts/ApplicationLayout'
import AuthorizationLayout from 'layouts/AuthorizationLayout'

import Dashboard from 'dashboard/containers/Dashboard'

import TodosFormUpdate from 'todos/form/containers/TodosFormUpdate'
import TodosFormCreate from 'todos/form/containers/TodosFormCreate'

import ProjectsFormCreate from 'projects/form/containers/ProjectsFormCreate'
import ProjectsFormUpdate from 'projects/form/containers/ProjectsFormUpdate'

import SignInForm from 'users/signin/containers/SignInForm'
import SignUpForm from 'users/signup/containers/SignUpForm'

const requireAuth = (state, replace, callback) => {
  if (store.getState().user) {
    return callback()
  }

  store.dispatch(validateToken()).then((response) => {
    if (response.error) {
      replace('/signin')
    }

    callback()
  })
}

const redirectIfAuthorized = (state, replace, callback) => {
  if (store.getState().user) {
    replace('/dashboard')
    return callback()
  }

  store.dispatch(validateToken()).then((response) => {
    if (!response.error) {
      replace('/dashboard')
    }

    callback()
  })
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={ApplicationLayout}>
        <Route path='' onEnter={requireAuth}>
          <Route path='' component={DashboardLayout}>
            <IndexRedirect to='dashboard' />

            <Route path='dashboard' component={Dashboard} />
          </Route>

          <Route path='projects'>
            <IndexRedirect to='/dashboard' />

            <Route path='' component={ProjectFormLayout}>
              <Route path='new' component={ProjectsFormCreate} />

              <Route path=':id'>
                <IndexRoute component={ProjectsFormUpdate} />

                <Route path='todos'>
                  <IndexRedirect to='/dashboard' />

                  <Route path='' component={TodoFormLayout}>
                    <Route path='new' component={TodosFormCreate} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path='todos'>
            <IndexRedirect to='/dashboard' />

            <Route path='' component={TodoFormLayout}>
              <Route path=':id' component={TodosFormUpdate} />
            </Route>
          </Route>
        </Route>

        <Route path='' component={AuthorizationLayout} onEnter={redirectIfAuthorized}>
          <Route path='signin' component={SignInForm} />
          <Route path='signup' component={SignUpForm} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
