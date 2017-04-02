import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import React, { Component, PropTypes } from 'react'
import { reduxForm, initialize, untouch } from 'redux-form'

import { getTodoById } from 'reducers/todos'
import { loadTodo, patchTodo } from 'actions/todos'

import TodosForm from 'todos/form/components/TodosForm'

class TodosFormUpdateContainer extends Component {
  componentWillMount() {
    this.props.loadForm(
      this.props.params.id
    )
  }

  render() {
    return <TodosForm {...this.props}
      buttonText='Update todo'
      titleText='Update todo'
    />
  }
}

TodosFormUpdateContainer.propTypes = {
  loadForm: PropTypes.func.isRequired,

  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

const loadForm = (id) => (dispatch, getState) => {
  const todo = getTodoById(getState(), id)

  if (todo) {
    return dispatch(initialize(
      'todo', todo
    ))
  }

  dispatch(loadTodo({id})).then(({ error }) => {
    if (error) return dispatch(push('/'))

    dispatch(initialize('todo',
      getTodoById(getState(), id)
    ))
  })
}

const onSubmit = (todo, dispatch) => (
  dispatch(patchTodo(todo)).then(({ error }) => {
    if (!error) dispatch(push('/'))
  })
)

const onSubmitFail = (_, dispatch) => {
  dispatch(untouch('todo', 'name'))
}

const mapDispatchToProps = {loadForm}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'todo',
  onSubmitFail,
  onSubmit
})(TodosFormUpdateContainer))
