const express = require('express')
var fs = require('fs')
var mysql = require('mysql');
const app = express()
const port = 3000

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shop"
});
con.connect(function (err) {
    console.log("Connected!");
    con.query("create database shop;show databases; use shop; create table gnord(id int not null primary key auto_increment, anun char(100)); insert into gnord(id,anun)values(null,'Anna'),(null,'Argishti'),(null,'Karen');select * from gnord; create table apranq(id int not null primary key auto_increment, tesak char(100)); insert into apranq(id,tesak)values(null,'xndzor'),(null,'gini'),(null,'shokolad'); select * from apranq;  create table vacharq(id int not null primary key auto_increment, anun char(100),gnord_id int,tesak char(100),foreign key (gnord_id)references apranq(id)); insert into vacharq(id,anun,tesak)values(null,'Anna','shokolad'),(null,'Argishti','xndzor'),(null,'Karen','gini'); select * from vacharq;",  function (err, result) {
      console.log("Database created");
    });
});

con.connect((err) => err)


app.get('/', (req, res) => {

    var sql = "SELECT * FROM gnord";
    con.query(sql, (err, result) => {

        res.send(result)
    });
})
// Delete a user
app.delete('/', (request, response) => {

    var sql = "DELETE FROM gnord WHERE id = 5";
    con.query(sql, (error, result) => {

        response.send('User deleted.');
    });
})

// Update an existing user
app.put('/', (request, response) => {


    var sql = 'UPDATE gnord MARIAM ? WHERE id = 10 '
    con.query(sql, (error, result) => {

        response.send('User updated successfully.');
    });
});

// Add a new user
app.post('/', (request, response) => {
    var sql = 'INSERT INTO gnord Aram ?';
    con.query(sql, (error, result) => {


        response.status(201).send(`User added with ID: `);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))