import React from 'react'
import { push } from 'react-router-redux'
import { reduxForm, untouch } from 'redux-form'

import { createProject } from 'actions/projects'

import ProjectsForm from 'projects/form/components/ProjectsForm'

const ProjectsFormCreateContainer = (props) => (
  <ProjectsForm {...props}
    titleText='Add new project'
    buttonText='Add new project'
  />
)

const onSubmit = (project, dispatch) => {
  dispatch(createProject(project)).then(({ error }) => {
    if (!error) dispatch(push('/'))
  })
}

const onSubmitFail = (_, dispatch) => {
  dispatch(untouch('project', 'name'))
}

export default reduxForm({
  form: 'project',
  onSubmitFail,
  onSubmit
})(ProjectsFormCreateContainer)
