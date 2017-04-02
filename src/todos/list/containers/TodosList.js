import transform from 'lodash/transform'

import { connect } from 'react-redux'
import { arrayMove } from 'react-sortable-hoc'

import { loadTodos, patchTodo, updateTodosProperties } from 'actions/todos'

import TodosList from 'todos/list/components/TodosList'

const onSortEnd = ({ oldIndex, newIndex, todos }) => (dispatch) => {
  const data = transform(arrayMove(todos, oldIndex, newIndex),
    (data, { id }, index) => data[id] = {priority: index},
  {})

  dispatch(updateTodosProperties(data))

  const { id, project } = todos[oldIndex]
  const { priority } = todos[newIndex]

  dispatch(patchTodo({id, priority})).then(({ error }) => {
    if (!error) dispatch(loadTodos({projectId: project}))
  })
}

const mapDispatchToProps = (dispatch, { todos }) => ({
  onSortEnd: (args) => dispatch(onSortEnd({...args, todos}))
})

export default connect(null, mapDispatchToProps)(
  TodosList
)
