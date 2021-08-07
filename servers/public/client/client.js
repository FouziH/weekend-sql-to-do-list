
//Exporting jquery library to my client.js file 
$(document).ready(onReady);


//Creating onReady function that will be responsible for listening to clicks
function onReady() {
    //log to see if my function is working correctly, I should see 
    console.log("on OnReady function");
    //This will be responsible  for listening to addTask button will call on the addTask function that was passed
    $(document).on("click", "#addTaskBtn", addTask);
}


function addTask() {
//log to the browser to see if the function is working as intended 
console.log("on addTask to the function"); //working correctly

//declaring my taskData variable that would store my inputs from the dom
const taskData = {
  task: $("#inputTask").val(),
  iscomplete: false

}
$.ajax({
    method: "POST",
    url: '/todo',
    data:taskData
}).then((response) =>{
    console.log("response is", response);
    getToDoTask();

}).catch((error) => {
    console.log("POST /todo failed error", error);
})
}


function getToDoTask(){
    $.ajax({
        method: 'GET',
        url: '/todo',
    }).then((response) => {
        console.log("GET /todo response is", response);
    })
}

