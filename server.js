const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(__dirname + "/mydb.db");

app.use(express.static(__dirname));


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

