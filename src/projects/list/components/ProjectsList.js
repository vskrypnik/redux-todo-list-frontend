import React, { PropTypes } from 'react'

import projectShape from 'shapes/project'

import ProjectsItem from 'projects/item/containers/ProjectsItem'

const NoProjects = () => (
  <div className='color-gray'>
    There is no projects yet.
    Add the first one!
  </div>
)

const ProjectsList = ({ projects }) => (
  <main>
    {projects.map((project, index) => (
      <ProjectsItem key={index} {...project} />
    ))}

    {!!projects.length || <NoProjects />}
  </main>
)

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    projectShape
  ).isRequired
}

export default ProjectsList
