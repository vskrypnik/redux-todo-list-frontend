import React, { PropTypes } from 'react'

const TodoFormLayout = ({ children }) => (
  <div className='column m-auto'>
    {children}
  </div>
)

TodoFormLayout.propTypes = {
  children: PropTypes.node
}

export default TodoFormLayout
