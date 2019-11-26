const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.get('/view', function (req, res) {

    res.sendFile(path.join(__dirname, "view.html"))
})

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname, "home.html"))
})

app.get('/make', function (req, res) {

    res.sendFile(path.join(__dirname, "make.html"))
})

app.listen(port, function () {
    console.log("App listening on port" + port)
});

var tables = [
    {
        ID: "Charmander",
        Name: "Charmanderbeautiful",
        Email: "firepokemon",
        Phone: 12345,
    },
    {
        ID: "Squirtle",
        Name: "Squirtlebeautiful",
        Email: "waterpokemon",
        Phone: 123456,
    },
    {
        ID: "Bisasam",
        Name: "Bisasambeautiful",
        Email: "grasspokemon",
        Phone: 1234567,
    },
    {
        ID: "pikachu",
        Name: "pikachubeautiful",
        Email: "electricitypokemon",
        Phone: 12345678,
    }

]

var wait = [
    {
        ID: "spongeBob",
        Name: "spongeBobbeautiful",
        Email: "squarePant",
        Phone: 54321,
    },
    {
        ID: "Patrick",
        Name: "Patrickbeautiful",
        Email: "seaStar",
        Phone: 1233654654456,
    },
    {
        ID: "Tadeus",
        Name: "Tadeusbeautiful",
        Email: "octopus",
        Phone: 1231432434567,
    },
    {
        ID: "Crabs",
        Name: "MrCrabs",
        Email: "MrCrabsHot",
        Phone: 123456989878,
    }

]



app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
app.get("/api/wait", function (req, res) {
    return res.json(wait);
});

app.post("/api/tables", function (req, res) {
    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    table.push(newTable);
    res.json(newTable);
});

app.post("/api/wait", function (req, res) {
    var newWait = req.body;
    newWait.routeName = newWait.name.replace(/\s+/g, "").toLowerCase();
    console.log(newWait);
    wait.push(newWait);
    res.json(newWait);
});