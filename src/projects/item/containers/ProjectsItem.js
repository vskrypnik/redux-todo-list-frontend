import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { push } from 'react-router-redux'

import { destroyProject } from 'actions/projects'
import { getTodosByProjectId } from 'reducers/todos'

import ProjectsItem from 'projects/item/components/ProjectsItem'

const ProjectsItemContainer = (props) => (
  <ProjectsItem {...props} />
)

ProjectsItemContainer.propTypes = {
  id: PropTypes.string.isRequired,

  handleUpdateClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleAddTodoClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, { id }) => ({
  todos: getTodosByProjectId(state, id)
})

const mapDispatchToProps = (dispatch, { id }) => ({
  handleDeleteClick: () => dispatch(destroyProject({id})),
  handleUpdateClick: () => dispatch(push(`/projects/${id}`)),
  handleAddTodoClick: () => dispatch(push(`/projects/${id}/todos/new`))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  ProjectsItemContainer
)
