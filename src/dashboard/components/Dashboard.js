import { Link } from 'react-router'
import React, { PropTypes } from 'react'

import projectShape from 'shapes/project'

import ProjectsList from 'projects/list/components/ProjectsList'

const Dashboard = ({ projects }) => (
  <main>
    <div className='m-b-15 m-t-15'>
      <ProjectsList projects={projects} />
    </div>

    <div className='text-center'>
      <Link to='/projects/new' className='ui button'>
        Add new project
      </Link>
    </div>
  </main>
)

Dashboard.propTypes = {
  projects: PropTypes.arrayOf(
    projectShape
  ).isRequired
}

export default Dashboard
