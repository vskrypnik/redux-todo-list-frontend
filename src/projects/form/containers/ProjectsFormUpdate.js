import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import React, { Component, PropTypes } from 'react'
import { reduxForm, initialize, untouch } from 'redux-form'

import { getProjectById } from 'reducers/projects'
import { loadProject, patchProject } from 'actions/projects'

import ProjectsForm from 'projects/form/components/ProjectsForm'

class ProjectsFormUpdateContainer extends Component {
  componentWillMount() {
    this.props.loadForm(
      this.props.params.id
    )
  }

  render() {
    return <ProjectsForm {...this.props}
      buttonText='Update project'
      titleText='Update project'
    />
  }
}

ProjectsFormUpdateContainer.propTypes = {
  loadForm: PropTypes.func.isRequired,

  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

const loadForm = (id) => (dispatch, getState) => {
  const project = getProjectById(getState(), id)

  if (project) {
    return dispatch(initialize(
      'project', project
    ))
  }

  dispatch(loadProject({id})).then(({ error }) => {
    if (error) return dispatch(push('/'))

    dispatch(initialize('project',
      getProjectById(getState(), id)
    ))
  })
}

const onSubmit = (project, dispatch) => {
  dispatch(patchProject(project)).then(({ error }) => {
    if (!error) dispatch(push('/'))
  })
}

const onSubmitFail = (_, dispatch) => {
  dispatch(untouch('project', 'name'))
}

const mapDispatchToProps = {loadForm}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'project',
  onSubmitFail,
  onSubmit
})(ProjectsFormUpdateContainer))
