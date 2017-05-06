export const addTodo = (todos, todo) => todos.set(todo.id, todo)

export const removeTodo = (todos, todo) => todos.delete(todo.id, todo)

export const updateTodo = (todos, todo) => todo.update(todo.id, todo)

export const mergeTodos = (todos, todos2) => todos.merge(todos2)

export const clearAll = todos => todos.clear()
