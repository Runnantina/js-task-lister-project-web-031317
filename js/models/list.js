// List Model


class List {
  constructor(list){
    this.title = list.title
    this.id = list.id
    List.all.push(this)

    this.tasks = [] //new tasks should be pushed into the corresponding list

  }

  render(){

    return [
      `<div id = "${this.title}">`,
         `<h5 class="title_box">${this.title}</h5>`,
         '<br>',
         `<p id = "${this.title}-tasks">`,
         '<br><br>',
         `<button type="button" data-id=${this.id} class ="delete-list">Remove List</button>`,
      `</div>`
    ].join('')

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

    static deleteList(id){
        return $.ajax({
          url: `http://localhost:3000/api/v1/lists/delete/${id}`,
          success: function(response) {
            console.log('response: ', response);
          }
        })
      }

}

List.all = []


// class property

// event delegation
