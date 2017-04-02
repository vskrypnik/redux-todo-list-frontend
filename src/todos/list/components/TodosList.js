import React, { PropTypes } from 'react'
import { SortableContainer } from 'react-sortable-hoc'

import todoShape from 'shapes/todo'

import TodosItem from 'todos/item/containers/TodosItem'

const NoTodos = () => (
  <div className='text-center m-b-15 m-t-15 color-gray'>
    There is no todos yet. Add the first one!
  </div>
)

const TodosList = SortableContainer(({ todos }) =>
  <div>
    {todos.map((todo, index) => (
      <TodosItem
        {...todo}
        key={index}
        index={index}
      />
    ))}

    {!!todos.length || <NoTodos />}
  </div>
)

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    todoShape
  ).isRequired
}

const shouldCancelStart = ({ target }) => (
  target.className.includes('cursor-pointer')
)

const TodosListWrapper = ({ todos, onSortEnd }) => (
  <TodosList
    todos={todos}
    onSortEnd={onSortEnd}
    shouldCancelStart={shouldCancelStart}
  />
)

TodosListWrapper.propTypes = {
  onSortEnd: PropTypes.func.isRequired,

  todos: PropTypes.arrayOf(
    todoShape
  ).isRequired
}

export default TodosListWrapper
