// List Model
class List {
  constructor(title){
    this.title = title
    List.all.push(this)

    this.id = List.all.length
    this.tasks = [] //new tasks should be pushed into the corresponding list

  }

}

//

  List.all = []
// class property

// event delegation
