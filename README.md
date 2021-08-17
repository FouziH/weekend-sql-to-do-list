# Project Name: TO DO  TASK

##Technology Uses:
    JQuery 
    Javascript
    Express JS
    PG
    HtML
    CSS

## Description

This is a simple application that would allow you to add a task to a list. Once the list is added, it would automatically be displayed in the DOM/browser. Your input will also be saved in a local database.


The database will have three columns: 

    1) Id column
    2) Task column 
    3) iscomplete column

Initially, when a task is added, the database will set the iscomplete column to a false. I thought this made sense because when a task is added, we want to press a complete button indicating the task is complete which will then update the database that the task is complete and that it should update the state of the boolean to a true.  The item completed background color will also change to light green, the text will be decorated a line through the text indicating the item is complete. The checked button will also turn green. A user will also have the option to undo the task completed by clicking the checked button. 

The application will also allow users to delete a task entered. When the delete button is clicked, the items will be removed from the DOM and the database instantly. 


# Weekend Challenge: SQL TO-DO List 

## Description of What I need to build:

PHASE 1:
    Work on creating my folders and files 
        [x]Create Server folder
            [x]Create public folder
                [x] Client folder 
                    - client.js file [✅]
                [x] styles
                    - style.css file [✅]
            [x] Routes folder
                - routes.js file [✅]
        - server.js file [✅]
        - Database.sql [✅] 
    Work on installing 
        [x] JSON 
        [x] express 
        [x] body-parser
        [x] postgresql

PHASE 2:
    The html.index file need to contain the following. 
        [x] Would need h1 element. 
            [x] Should say To-Do App.
        [x] input to add a task. 
        [x] Button to add the Task. 
        [] button the task on unordered list. 
            [x] should have a button for deleting the task from the dom. 
            [x] Should have a button to complete a task
PHASE 3:
    Work on creating my client side logic. 
    [x] Make sure the jquery library is saved in vendor folder. 
    [x] Create OnReady Function. 
    [x] Create my function to add task. 
        [x] Create ajax request to post input value to the Database/server.
        [x] create ajax request to get db results from the server.
        [x] Create a function to display results once an item/task is added. 
        [x] Create ajax request to update the status of the task.
            [x] When the complete button is clicked, the iscomplete  boolean in the db should turn from false to true.
            [x] grab the id of the li being deleted.
            [x] when a the delete button is clicked, it should the li from the DOM.
            [x] Create ajax request and get the id requested to be deleted from the DOM to get also get deleted from the db.
            [x] When the checked button is clicked is it should turn the database to true and on the DOM should have another class that will do come sort of text decoration
            [x] the text decoration should have a line go through the text indicating the task is complete and background color should be set to green

PHASE 4:
    Work on creating my Database -- MORE PLANNING NEEDED
        [x] Create a database table named "todo"
            [x] it should have id set to serial number assigned by the db
            [x] should have task column VARCHAR set 500
            [x]  should have is complete set to a boolean false initially
            [x] it should say what the task is.
            [x] what the state of the task is in the db.
            [x] should have button for complete state from false to true.
PhASE 5:
    //Require the app that I would be using in my server.js file. 
    [x]load express. 
    [x] load body-parser.
    [x] declare my port variable.
    [x]  declare routes and assign it to its right path.
    [x] declare my app.use and pass express.static and server/public.
    [x] create my app.use and pass my routes variable.
    [x] create my app.listen.



