//load express
const express = require('express');
//creating my router variable and using the express.Router
const router = express.Router();
//loading my node postgreSql database
const pg = require('pg');
// declaring my pool and set it to new pg.pool to get my database connect to my server
const pool = new pg.Pool({
  database: "todotask", //database
  host:'localhost',
  port: 5432
});
//this is my router to get predetermined query 
router.get('/', (req, res) => {
    let sqlQuery = `SELECT * FROM "todo" 
    ORDER BY "id" ASC;
    `; // passed my query that would be pooled 
    pool.query(sqlQuery) //sending my slqQuery variable to 
    .then((dbRes) => { //then response will be saved in a variable called dbRes
        console.log("dbRes is", dbRes.rows);
        res.send(dbRes.rows); //sending my dbRes results to the client as dbRes.rows
    }).catch((error) => { //this will catch and error if there is an issue with my predetermined query that was sent to the db 
        console.log('Router/Get failed', error);// login the error 
        res.sendStatus(500); //sending 500 error message to the client 
    })
})
//router.post will be  be responsible for inserting into the database 
router.post('/', (req, res) => {
    //declaring sqlQuery that will have the query needed to insert data from the client side into the db Values will always be masked and assigned $number value 
    let sqlQuery = `
	INSERT INTO "todo"
	("task", "iscomplete")
	VALUES
	($1, $2)`;
    //declaring my sql params and passing my req.body object into it
let sqlParams = [req.body.task, req.body.iscomplete];

pool.query(sqlQuery, sqlParams) //
.then((dbRes) => {
    console.log(dbRes);
    res.sendStatus(201)
}).catch((error) => {
    console.log("Failed to POST into the database", error);
    res.sendStatus(500)
})
})
router.delete('/:id', (req, res) => {
    let sqlQuery = `DELETE FROM "todo"
where "id" = $1;`;
let sqlParams = [req.params.id ]
pool.query(sqlQuery, sqlParams)
.then((dbRes) =>{
    console.log("It worked", dbRes);
    res.sendStatus(201)
})
.catch((error) => {
console.log("DELETE id request failed", error);
})
})
router.put('/:id', (req, res) => {

 let sqlQuery = `UPDATE "todo" SET "iscomplete" = true
 WHERE "id" = $1;`;
 let sqlParams = [
     req.params.id
 ]
 pool.query(sqlQuery, sqlParams)
 .then((dbRes) => {
     console.log(dbRes)
     res.send(dbRes)
 }).catch((error) =>{
     console.log('PUT /:id error', error)
     send.sendStatus(500)
 })

})

module.exports = router;  //exporting the router 