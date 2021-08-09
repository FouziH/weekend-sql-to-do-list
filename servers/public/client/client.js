//Exporting jquery library to my client.js file 
$(document).ready(onReady);
//Creating onReady function that will be responsible for listening to clicks
function onReady() {
    //log to see if my function is working correctly, I should see 
    console.log("on OnReady function");
    //This will be responsible  for listening to addTask button will call on the addTask function that was passed
    $(document).on("click", "#addTaskBtn", addTask);
    $('#myTasks').on("click", ".deleteBtn", deleteTask);
    $("#myTasks").on("click", ".completeBtn", completeTask);
  //calling getToDoTask
    getToDoTask();
}
//This function will addTask from my input into an a taskData object and will make a request to the server to make a POST 
function addTask() {
//log to the browser to see if the function is working as intended 
console.log("on addTask to the function"); //working correctly
//declaring my taskData variable that would store my inputs from the dom
const taskData = {
  task: $("#inputTask").val(),
  iscomplete: false // iscomplete will be initialized as false 
}
//making ajax request to send a POST request 
//promise method
$.ajax({
    method: "POST", // Method is set to POST
    url: '/todo', // passing the url
    data:taskData // passing taskData object declared
}).then((response) =>{ //waiting for response
    console.log("response is", response); //logging the response 
    getToDoTask(response); //calling the getToDoTak function  and passing the response as an argument 
    //telling the jquery to clear the input once the add task button is pressed 
    $("#inputTask").val("");

}).catch((error) => { // if the above request failed 
    //we are going to use the catch error method 
    console.log("POST /todo failed error", error); // using the console to log what the issue might be
})
}
//function  will get the todo task 
function getToDoTask(){
    $.ajax({ //making ajax request 
        method: 'GET', // method is get 
        url: '/todo', //url is passed as /todo
    }).then((response) => { // waiting on the response
        //loging the object/response to the console.
        renderTask(response)
        console.log("GET /todo response is", response);
    }).catch((err) => { //catching any issue we might deal with and logging the error to the console.
        console.log("Error in function getTODoTak is", err);
    })
}
//The function will render Tasks into the dom and takes and argument as parameter
function renderTask(toDoTask) {
    let myTask = $('#myTasks');  //declaring variable and setting to my order list element 
    myTask.empty(); // using the empty method
    //using the for loop to access the the parameter 
    for (let i = 0; i < toDoTask.length; i++) {
        //appending the myTask to the dom 
       
          myTask.append(`<li data-id = "${toDoTask[i].id}" data-task ="${toDoTask[i].task}" data-iscomplete ="${toDoTask[i].iscomplete}" >${toDoTask[i].task} 
        <button class = "deleteBtn">Delete</button>
        <button class ="completeBtn">✔️</button></li>`);
       

        }
      
   
}
//This  function will delete tasks from the dom and the database/server
function deleteTask() {
    console.log('on deleteTask function'); //logging to see if my delete function working properly 
    console.log($(this));
    const taskId = $(this).closest('li').data('id'); // declared taskId and setting the closest data id as val
    console.log(taskId);// logging the taskId to see when the delete button is clicked i am able to get the correct id --- getting the correct id results 
    //Would make a ajax request to delete items from the dom based on the id of the task
    $.ajax({
        method:"DELETE", //Ajax method request is delete
        url: `/todo/${taskId}` //url is the url address/id
    }).then((response) => {
        console.log(response); // log response 
          getToDoTask(response); //calling the getToDoTak function  and passing the 
    }).catch((error) => { //catch error 
        console.log("DELETE /todo failed", error); // log the delete error to the console
    })
}
//function to request put to the server when the complete is checked
function completeTask() {
    let completedId = $(this).closest('li').data('id');
    console.log(completedId);
    $.ajax({
        method: 'PUT',
        url: `/todo/${completedId}`,
    }).then((response) => {
        console.log("PUT /todo response is", response)
        for (let i = 0; i < response.length; i++) {
          if (response[i].iscomplete === true) {
            //when the complete checked button is clicked, the done class in my css would be applied to the list
            $(this).closest("li").toggleClass("done");
            //  $(this).closest("li").parent().children().third().toggleClass("checkedOff");
            $(this).closest("li").children().last().toggleClass("checkedOff");
          }
        }
    }).catch((error) => {
        console.log("PUT /todo  failed", error);
    }) 
}