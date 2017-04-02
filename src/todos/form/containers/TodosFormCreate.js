import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, untouch } from 'redux-form'

import { createTodo } from 'actions/todos'

import TodosForm from 'todos/form/components/TodosForm'

const TodosFormCreateContainer = (props) => (
  <TodosForm {...props}
    titleText='Add new todo'
    buttonText='Add new todo'
  />
)

const onSubmit = (todo, dispatch, { params: { id: projectId} }) => (
  dispatch(createTodo({...todo, projectId})).then(
    ({ error }) => { if (!error) dispatch(push('/')) }
  )
)

const onSubmitFail = (_, dispatch, error, { params }) => {
  dispatch(untouch(`todos.${params.id}`, 'name'))
}

const mapStateToProps = (_, { params }) => ({
  form: `todos.${params.id}`
})

export default connect(mapStateToProps)(
  reduxForm({onSubmit, onSubmitFail})(
    TodosFormCreateContainer
  )
)
