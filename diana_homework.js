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

con.connect((err) => err)

app.get('/', (req, res) => {
    fs.readFile("anna.html", "utf8", function (err, data) {
        if (err) throw err;
        res.send(data);
    });
    // con.connect(function (err) {
        // if (err) throw err;
        // var sql = "DELETE FROM apranq WHERE id = 1";
        // con.query(sql, function (err, result) {
        //     if (err) throw err;
        //     console.log("Number of records deleted: " + result.affectedRows);
        // });
    // });
})

app.get('/learn_more', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))