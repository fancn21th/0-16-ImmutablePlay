import Immutable from 'immutable'
import Todo from '../Todo'
import * as todosActions from './index'

describe('Modifying an Immutable Map()', () => {
  it('should add todo to state', () => {
    const todo = new Todo('Todo 1', 'I am a todo', false)
    let todos = Immutable.Map()
    todos = todosActions.addTodo(todos, todo)
    expect(todos.get(todo.id)).toEqual(todo)
  })
})
