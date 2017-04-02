import React, { PropTypes } from 'react'

const ProjectFormLayout = ({ children }) => (
  <div className='column m-auto'>
    {children}
  </div>
)

ProjectFormLayout.propTypes = {
  children: PropTypes.node
}

export default ProjectFormLayout
