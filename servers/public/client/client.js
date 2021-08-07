//Exporting jquery library to my client.js file 
$(document).ready(onReady);
//Creating onReady function that will be responsible for listening to clicks
function onReady() {
    //log to see if my function is working correctly, I should see 
    console.log("on OnReady function");
    //This will be responsible  for listening to addTask button will call on the addTask function that was passed
    $(document).on("click", "#addTaskBtn", addTask);
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
      myTask.append(`<li class="checked">${toDoTask[i].task} 
        <button class = "deleteBtn">Delete</button></li>`);
    }
}



