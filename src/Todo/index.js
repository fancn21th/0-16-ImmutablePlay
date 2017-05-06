class Todo {
  constructor(title = '', text = '', completed = false) {
    this.id = Math.floor(Math.random * 999999).toString()
    this.title = title
    this.text = text
    this.completed = completed
  }
}
export default Todo

