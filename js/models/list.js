// List Model
class List {
  constructor(title){
    this.title = title
    List.all.push(this)

    this.id = List.all.length
    this.tasks = [] //new tasks should be pushed into the corresponding list

  }

  static getAll(){
      return $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/lists',

      })
      }


  static create(params){
      return $.ajax({
        url: 'http://localhost:3000/api/v1/lists',
        method: 'POST',
        data: params// pass in {key: "value", key: "value"}
      })
    }

}

List.all = []


// class property

// event delegation
