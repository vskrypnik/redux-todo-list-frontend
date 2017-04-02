import React, { PropTypes } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

import todoShape from 'shapes/todo'

import TodosList from 'todos/list/containers/TodosList'

const ProjectsItem = ({ name, todos, handleUpdateClick, handleDeleteClick, handleAddTodoClick }) => (
  <Card fluid>
    <Card.Content className='left aligned'>
      <Card.Header className='left floated project-name'>
        {name}
      </Card.Header>

      <Button.Group floated='right' size='mini' basic>
        <Button onClick={handleAddTodoClick} icon>
          <Icon name='write' className='add' />
        </Button>

        <Button onClick={handleUpdateClick} icon>
          <Icon name='write' className='cursor-pointer' />
        </Button>

        <Button onClick={handleDeleteClick} icon>
          <Icon name='trash' className='cursor-pointer' />
        </Button>
      </Button.Group>
    </Card.Content>

    <Card.Content>
      <TodosList todos={todos} />
    </Card.Content>
  </Card>
)

ProjectsItem.propTypes = {
  name: PropTypes.string.isRequired,

  todos: PropTypes.arrayOf(todoShape).isRequired,

  handleUpdateClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleAddTodoClick: PropTypes.func.isRequired
}

export default ProjectsItem
