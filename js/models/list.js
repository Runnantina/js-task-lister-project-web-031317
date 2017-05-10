// List Model
class List {
  constructor(title){
    this.title = title
    List.all.push(this)

    this.id = List.all.length
    this.tasks = [] //new tasks should be pushed into the corresponding list

  }

  static all(){
      return $.ajax({
        method: 'GET',
        // url: 'http://localhost:3000/api/v1/animals'
      })
    }

  static create(params){
      return $.ajax({
        // url: 'http://localhost:3000/api/v1/animals',
        method: 'POST',
        data: params
      })
    }

}

//

  List.all = []
// class property

// event delegation
