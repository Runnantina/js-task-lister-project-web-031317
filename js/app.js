// Initialize

$(function() { // on document ready
  var allLists = []
  // make ajax request to get all lists

  // then on receiving a JSON respose from api,
  // add an option tag into the select tag for each list
  // var response = {lists: [
  //   {name: "Tina's List", id: 1} ,
  //   {name: "Todo List", id: 2},
  //   {name: "Weekend Chores", id: 3}
  //  ]
  // }

  List.all().then(function(lists){
    var render = lists.map(function(list){
      allLists.push(list)
      console.log(list)
      return `<div id = "${list.title}"> <h3>${list.title}</h3><br> <p id = "${list.title}-tasks"></p></div>`
    })
    $('#lists').html('<h1>My Lists</h1>' + render.join(' '))
    var options = lists.map(function(list) {
      return `<option value="${list.id}">${list.title}</option>`
    })
    $('#select_list').html(options.join(''))
  })




  $('#add_list').on('submit', function(event){
    event.preventDefault();

    // let listTitle = event.target.children[1].value
    var listTitle = $('#list_title').val()
    let optiontag = `<option value="${listTitle}" type= text>${listTitle}</option>`
    let selectList = $('#select_list').val()
    $('#select_list').append(optiontag)
    //  newList = new List(listTitle)

    // $('#lists').append(`${newList.title}`)
    var userList = `<div id = "${listTitle}"> <h3>${newList.title}</h3><br> <p id = "${listTitle}-tasks"></p><button type="button" id ="delete-list">Remove List</button><br><br> </div>`
    $('#lists').append(userList)

    var listTitle = $('#list_title').val("")


  });

  $('#add_task').on('submit', function(event){
    event.preventDefault();


    let selectList = $('#select_list').val()


    var descriptionInput = $('#task_description').val()
    var priorityInput = $('#task_priority').val()
    var associateList = List.all.find(function(listName){
       return listName.title === selectList
    })
    // let newTask = new Task(descriptionInput, priorityInput, associateList)
    var taskDiv = `<p id = "task-${newTask.id}">Description: ${descriptionInput}<br> Priority: ${priorityInput}<br><br><button type="button" id ="delete-button">Delete</button><br><br></p>`

    $(`#${associateList.title}-tasks`).append(taskDiv)

    $('#task_description').val("")
    $('#task_priority').val("")

  })

  $('body').on('click', '#delete-button', function(){
    this.parentElement.remove()
  })

  $('body').on('click', '#delete-list', function(){
    this.parentElement.remove()
    // if($('#select_list').val()=== `${newList.title}`){
    //   console.log("found!")

  })

  })


  // listController = new ListsController();
  // listController.init();
  // tasksController = new TasksController();
  // tasksController.init();
// });
