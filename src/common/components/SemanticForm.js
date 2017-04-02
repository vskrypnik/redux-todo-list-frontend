import React, { PropTypes } from 'react'

const SemanticForm = ({ handleSubmit, children }) => (
  <form onSubmit={handleSubmit} className='ui form'>
    <div className='ui stacked'>
      {children}
    </div>
  </form>
)

SemanticForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default SemanticForm
