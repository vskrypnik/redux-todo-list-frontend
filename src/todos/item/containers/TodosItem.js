import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { push } from 'react-router-redux'

import { loadTodo, patchTodo, destroyTodo } from 'actions/todos'

import TodosItem from 'todos/item/components/TodosItem'

const TodosItemContainer = (props) => (
  <TodosItem {...props} disabled={props.done} />
)

TodosItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,

  handleUpdateClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired
}

const handleClick = (id) => (done) => (dispatch) => {
  dispatch(patchTodo({id, done})).then(({ error }) => {
    if (!error) dispatch(loadTodo({id}))
  })
}

const mapDispatchToProps = (dispatch, { id, done }) => ({
  handleClick: () => dispatch(handleClick(id)(!done)),
  handleDeleteClick: () => dispatch(destroyTodo({id})),
  handleUpdateClick: () => dispatch(push(`/todos/${id}`))
})

export default connect(null, mapDispatchToProps)(
  TodosItemContainer
)
