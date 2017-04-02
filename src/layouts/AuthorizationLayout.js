import React, { PropTypes } from 'react'

const AuthorizationLayout = ({ children }) => (
  <div className='column m-auto'>
    {children}
  </div>
)

AuthorizationLayout.propTypes = {
  children: PropTypes.node
}

export default AuthorizationLayout
