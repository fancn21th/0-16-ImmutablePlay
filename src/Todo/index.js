import { v4 } from 'node-uuid'

class Todo {
  constructor(title = '', text = '', completed = false) {
    this.id = v4()
    this.title = title
    this.text = text
    this.completed = completed
  }
}
export default Todo

