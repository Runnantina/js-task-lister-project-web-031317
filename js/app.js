// Initialize

$(function() { // on document ready
  // var all = []
  // make ajax request to get all lists

  List.getAll().then(function(lists){
    var render = lists.map(function(list){
      var listInstance = new List(list)

      return listInstance.render()

    });

    $('#lists').html('<h1>My Lists</h1>' + render.join(' '));

    var options = lists.map(function(list) {
      return `<option value="${list.id}">${list.title}</option>`
    })

    $('#select_list').html(options.join(''))

    Task.getAll().then(function(task){
      var associateList = List.all.find(function(list){
        console.log(`${list.id} == ${selectList}: ${list.id == selectList}`)
         return list.id === selectList
         // associating with list.id (refer to the tasks_controller)
      })
      console.log(associateList)
      let newTask = new Task(task.description, task.priority, associateList)
      console.log(this)

      var taskDiv = `<p id = "task-${newTask.id}">Description: ${task.description}<br> Priority: ${task.priority}<br><br><button type="button" id ="delete-button">Delete</button><br><br></p>`
      $(`#${associateList.title}-tasks`).append(taskDiv)
    })


  })


  $('#add_list').on('submit', function(event){
    event.preventDefault();

    const listTitle = $('#list_title').val()
    const selectList = $('#select_list').val()

    console.log(listTitle)

    List.create({
      title: listTitle

        }).then(function(list){

          newList = new List(list)

          // List.all.push(newList)
          var render2 = List.all.map(function(selected){
            return `<div id = "${selected.title}"> <h5 class="list_box">${selected.title}</h5><br> <p id = "${selected.title}-tasks"></p><br><br><button type="button" id=${selected.id} class="delete-list">Remove Task</button></div>`
        })

        $('#lists').html('<h1>New Lists</h1>'+ render2.join('<br>'))

        $('#list_title').val("")
        let optiontag = `<option value="${list.id}" type= text>${listTitle}</option>`
        $('#select_list').append(optiontag)
        // inside List.create()
    })

    // ########## inside from


    $('#list_title').val("")

  });

  $('#add_task').on('submit', function(event){
    event.preventDefault();


    var selectList = $('#select_list').val()
    var descriptionInput = $('#task_description').val()
    var priorityInput = $('#task_priority').val()

    Task.create({
      description: descriptionInput,
      priority: priorityInput,
      list: {
        id: selectList
      }
    }).then(function(task){
      var associateList = List.all.find(function(list){
        console.log(`${list.id} == ${selectList}: ${list.id == selectList}`)
         return list.id === selectList
         // associating with list.id (refer to the tasks_controller)
         let newTask = new Task(task.description, task.priority, associateList)
         var taskDiv = `<p id = "task-${newTask.id}">Description: ${task.description}<br> Priority: ${task.priority}<br><br><button type="button" id ="delete-button">Delete</button><br><br></p>`
         $(`#${associateList.title}-tasks`).append(taskDiv)
      })
      console.log(this)

    })

    // var associateList = List.all.find(function(listName){

    //    return listName.title === selectList
    // })
    // let newTask = new Task(descriptionInput, priorityInput, associateList)


    $('#task_description').val("")
    $('#task_priority').val("")

  })

      $('body').on('click', '.delete-button', function(){
        this.parentElement.remove()
        console.log('here');

        })


      $('body').on('click', '.delete-list', function(){
        var id = $(this).data("id")
        List.deleteList(id)
        //this.parentElement.parentElement.remove()

        this.parentElement.parentNode.remove()
    })





    // if($('#select_list').val()=== `${newList.title}`){
    //   console.log("found!")

  })




  // listController = new ListsController();
  // listController.init();
  // tasksController = new TasksController();
  // tasksController.init();
// });
