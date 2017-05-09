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

    $('#lists_display').append(`${newList.title}`)


    // work on a render method to display out
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

    // let association = `<div id = "${newTask}" ></div>`
    $('#lists_display').append(`${descriptionInput}`)

    // $('#description_display').append(descriptionInput)

    //

  })



  // listController = new ListsController();
  // listController.init();
  // tasksController = new TasksController();
  // tasksController.init();
});
