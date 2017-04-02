import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

import { getProjects } from 'reducers/projects'
import { loadProjects } from 'actions/projects'

import Dashboard from 'dashboard/components/Dashboard'

class DashboardContainer extends Component {
  componentWillMount() { this.props.componentWillMount() }
  render() { return <Dashboard {...this.props} /> }
}

DashboardContainer.propTypes = {
  componentWillMount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  projects: getProjects(state)
})

const mapDispatchToProps = {
  componentWillMount: loadProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DashboardContainer
)
