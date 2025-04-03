const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(__dirname + "/mydb.db");

app.use(express.static(__dirname));


app.get("/N:N", (req, res) => {
    db.serialize(() => {    // esegue le query in ordine
        db.run(`CREATE TABLE "Contacts" (
            "ContactID"	INTEGER NOT NULL,
            "FirstName"	TEXT NOT NULL,
            "LastName"	TEXT NOT NULL,
            "Email"	TEXT NOT NULL UNIQUE,
            "Phone"	TEXT UNIQUE,
            PRIMARY KEY("ContactID" AUTOINCREMENT)
        );`)
        db.run(`CREATE TABLE "Groups" (
            "GroupID"	INTEGER NOT NULL,
            "Name"	TEXT NOT NULL,
            PRIMARY KEY("GroupID" AUTOINCREMENT)
        );`)
        db.run(`CREATE TABLE "Contacts_Groups" (
            "ContactID"	INTEGER NOT NULL,
            "GroupID"	INTEGER NOT NULL,
            PRIMARY KEY("ContactID","GroupID"),
            FOREIGN KEY("ContactID") REFERENCES "Contacts"("ContactID"),
            FOREIGN KEY("GroupID") REFERENCES "Groups"("GroupID")
        );`)

        db.close();
        res.status(200).send(JSON.stringify("Tabelle create!"));
    })
})

app.get("/Delete/N:N", (req, res) => {
    db.serialize(() => {
        db.run(`DROP TABLE Contacts`);
        db.run(`DROP TABLE Groups`);
        db.run(`DROP TABLE Contacts_Groups`);

        db.close();
        res.status(200).send(JSON.stringify("Tabelle eliminate!"));
    })
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

