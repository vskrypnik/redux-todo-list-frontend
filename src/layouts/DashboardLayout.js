import React, { PropTypes } from 'react'

const DashboardLayout = ({ children }) => (
  <div className='six wide column m-auto'>
    {children}
  </div>
)

DashboardLayout.propTypes = {
  children: PropTypes.node
}

export default DashboardLayout
