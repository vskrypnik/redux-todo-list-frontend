import React, { PropTypes } from 'react'

const ApplicationLayout = ({ children }) => (
  <div className='ui middle aligned center aligned grid four column'>
    {children}
  </div>
)

ApplicationLayout.propTypes = {
  children: PropTypes.node
}

export default ApplicationLayout
