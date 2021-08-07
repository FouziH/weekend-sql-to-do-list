//Loading express into my server.js file 
const express = require('express');

//loading body parser to my server js file
const bodyParser = require('body-parser');


//creating my app express 
const app = express()

//declaring port variable 
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

//declaring my routes variable 
const router = require('./routes/routes')

//telling express to use the server/public folder
app.use(express.static('servers/public'));

//calling the app.use function and passing the router variable from above as an argument 
app.use("/todo", router);


//calling the app. listen method 

app.listen(port, (req, res) => {
    console.log("Up and running on port", port);
})





