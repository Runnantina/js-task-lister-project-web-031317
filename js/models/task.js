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

  static getAll(){
      return $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/tasks',
        success: function(response) {
          console.log(response);
        }
      })
    }


  static create(params){
      return $.ajax({
        url: 'http://localhost:3000/api/v1/tasks',
        method: 'POST',
        data: params
      })
    }

}

  Task.all = []
