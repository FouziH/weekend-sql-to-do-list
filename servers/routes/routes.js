//load express
const express = require('express');

const router = express.Router();

//loading my node postgreSql database
const pg = require('pg');

const pool = new pg.Pool({
  database: "todotask",
  host:'localhost',
  port: 5432
});

router.get('/', (req, res) => {
    let sqlQuery = `SELECT * FROM "todo"
    ORDER BY "iscomplete";
    `
    pool.query(sqlQuery)
    .then((dbRes) => {
        console.log("dbRes is", dbRes.rows);
        res.send(dbRes.rows)
    }).catch((error) => {
        console.log('Router/Get failed', error);
        res.sendStatus(500)
    })
})
router.post('/', (req, res) => {
    let sqlQuery = `
	INSERT INTO "todo"
	("task", "iscomplete")
	VALUES
	($1, $2)`;
let sqlParams = [req.body.task, req.body.iscomplete];

pool.query(sqlQuery, sqlParams)
.then((dbRes) => {
    console.log(dbRes);
    res.sendStatus(201)
}).catch((error) => {
    console.log("Failed to POST into the database", error);
    res.sendStatus(500)
})
})

module.exports = router;  //exporting the router 