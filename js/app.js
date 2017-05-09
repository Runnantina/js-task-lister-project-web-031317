// Initialize

$(function() { // on document ready
  $('#add_list').on('submit', function(event){
    event.preventDefault();

    // let listTitle = event.target.children[1].value
    var listTitle = $('#list_title').val()
    let optiontag = `<option value="${listTitle}" type= text>${listTitle}</option>`
    let selectList = $('#select_list').val()
    $('#select_list').append(optiontag)
     newList = new List(listTitle)

    // $('#lists').append(`${newList.title}`)
    var userList = `<div id = "${listTitle}"><h3>${newList.title}</h3><br> <p id = "${listTitle}-tasks"></p> </div>`
    $('#lists').append(userList)

    var listTitle = $('#list_title').val(" ")

  });

  $('#add_task').on('submit', function(event){
    event.preventDefault();

    let selectList = $('#select_list').val()


    let descriptionInput = $('#task_description').val()
    let priorityInput = $('#task_priority').val()
    let associateList = List.all.find(function(listName){
       return listName.title === selectList
    })
    let newTask = new Task(descriptionInput, priorityInput, associateList)
    var taskDiv = `<p id = "task-${newTask.id}">Description: ${descriptionInput}<br> Priority: ${priorityInput}<br><br></p>`
    // var listTitle = $('#select_list').val()
    // debugger
    $(`#${associateList.title}-tasks`).append(taskDiv)

  })



  // listController = new ListsController();
  // listController.init();
  // tasksController = new TasksController();
  // tasksController.init();
});
