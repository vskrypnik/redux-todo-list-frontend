import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Card, Button, Icon } from 'semantic-ui-react'

const TodosItem = ({ name, done, handleClick, handleUpdateClick, handleDeleteClick }) => (
  <Card fluid className={classNames('left aligned', {'cursor-move': !done})}>
    <Card.Content>
      <input onChange={handleClick}
        checked={done} type='checkbox'
        className='checkbox cursor-pointer' />

      <div className='inline-block todo-name' onClick={handleClick}>
        {done
          ? <del className='cursor-pointer'>{name}</del>
          : <span className='cursor-pointer'>{name}</span>
        }
      </div>

      <Button.Group floated='right' size='mini' basic>
        <Button onClick={handleUpdateClick}
          icon className='cursor-pointer'>

          <Icon name='write' className='cursor-pointer' />
        </Button>

        <Button onClick={handleDeleteClick}
          icon className='cursor-pointer'>

          <Icon name='trash' className='cursor-pointer' />
        </Button>
      </Button.Group>
    </Card.Content>
  </Card>
)

TodosItem.propTypes = {
  done: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,

  handleClick: PropTypes.func.isRequired,
  handleUpdateClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired
}

export default SortableElement(TodosItem)
