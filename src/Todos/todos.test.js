import Immutable from 'immutable'
import _ from 'lodash'
import Todo from '../Todo'
import * as todosActions from './index'

describe('Test Immutable On Todos', () => {
  describe('Modifying an Immutable Map()', () => {
    it('should add todo to state', () => {
      const todo = new Todo('Todo 1', 'I am a todo', false)
      let todos = Immutable.Map()
      todos = todosActions.addTodo(todos, todo)
      expect(todos.get(todo.id)).toEqual(todo)
    })
    it('should remove todo from state', () => {
      const todo = new Todo('Todo 1', 'I am a todo', false)
      let todos = Immutable.Map()
      todos = todosActions.addTodo(todos, todo)
      todos = todosActions.removeTodo(todos, todo)
      expect(todos.size).toEqual(0)
    })
    it('should update todo', () => {
      const todo = new Todo('Todo 1', 'I am a todo', false)
      let todos = Immutable.Map()
      todos = todosActions.addTodo(todos, todo)
      todo.title = 'Todo 11'
      todos = todosActions.updateTodo(todos, todo)
      expect(todos.get(todo.id).title).toEqual('Todo 11')
    })
    it('should remove all todos', () => {
      let todos = Immutable.Map()
      _.range(10).forEach((index) => {
        const todo = new Todo(
          `Todo ${index}`,
          'I am a todo',
          false,
        )
        todos = todosActions.addTodo(todos, todo)
      })
      expect(todos.size).toEqual(10)
      todos = todosActions.clearAll(todos)
      expect(todos.size).toEqual(0)
    })
    it('should merge two todo list', () => {
      let todos = Immutable.Map()
      _.range(10).forEach((index) => {
        const todo = new Todo(
          `Todo ${index}`,
          'I am a todo',
          false,
        )
        todos = todosActions.addTodo(todos, todo)
      })
      let todos2 = Immutable.Map()
      _.range(10).forEach((index) => {
        const todo = new Todo(
          `Todo ${index}`,
          'I am a todo',
          false,
        )
        todos2 = todosActions.addTodo(todos2, todo)
      })
      todos = todosActions.mergeTodos(todos, todos2)
      expect(todos.size).toEqual(20)
    })
  })
  describe('Searching an Immutable Map()', () => {
    it('should properly report keys', () => {
      const todo = new Todo('Todo 1', 'This is a todo 1', false)
      let todos = Immutable.Map()
      todos = todosActions.addTodo(todos, todo)
      expect(todos.has(todo.id)).toEqual(true)
    })
    it('should properly report included values', () => {
      const todo = new Todo('Todo 1', 'This is a todo 1', false)
      let todos = Immutable.Map()
      todos = todosActions.addTodo(todos, todo)
      expect(todos.includes(todo)).toEqual(true)
    })
    it('should properly report included values', () => {
      let todos = Immutable.Map()
      let todos2 = Immutable.Map()
      _.range(10).forEach((index) => {
        const todo = new Todo(
          `Todo ${index}`,
          'I am a todo',
          false,
        )
        todos = todosActions.addTodo(todos, todo)
      })
      _.range(10).forEach((index) => {
        const todo = new Todo(
          `Todo ${index}`,
          'I am a todo',
          false,
        )
        todos2 = todosActions.addTodo(todos2, todo)
      })
      const multipleTodoStates = Immutable.Map({
        todo1: todos,
        todo2: todos2,
      })
      const todoId = todos.first().id
      expect(multipleTodoStates.getIn(['todo1', todoId], null)).toEqual(todos.first())
    })
  })
})

