// Task Model
class Task {
  constructor(description, priority, list){
    this.description = description
    this.priority = priority
    this.list = list
    this.list.tasks.push(this) // connecting this task instance with the 'list'
    Task.all.push(this) // updating the collection of all tasks
    this.id = Task.all.length

  }
}

  Task.all = []
