const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

var waitTables = [
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
    return res.json(waitTables);
});

app.get("/api/tables/:table", function (req, res) {
    var chosen = req.params.table;


    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].Name) {
            return res.json(tables[i]);
        }
    }
    return res.json(false);
});

app.get("/api/tables/:wait", function (req, res) {
    var chosen = req.params.wait;
    console.log(chosen);
    for (var i = 0; i < waitTables.length; i++) {
        if (chosen === waitTables[i].Name) {
            return res.json(waitTables[i]);
        }
    }
    return res.json(false);
});

app.post("/api/tables", function (req, res) {
    var reservation = req.body;

    if (tables.length < 5) {
        tables.push(reservation);
    } else {
        waitTables.push(reservation);
    }

    return res.json(reservation);
});

app.post("/api/wait", function (req, res) {
    var newWait = req.body;
    // newWait.routeName = newWait.name.replace(/\s+/g, "").toLowerCase();
    console.log(newWait);
    waitTables.push(newWait);
    return res.json(newWait);
});