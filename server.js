const express = require('express')
const logger = require("morgan");
let mongoose = require("mongoose");

const PORT = process.env.PORT || 8088

const Workout = require("./model/Workout.js");
const app = express()

const db = require("./model");

// used to navigate between pagess
var path = require("path");

app.use(logger("dev"));

const mongojs = require("mongojs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// const apirouter = require('./app/router')

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes



// To go stat.html page
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});
// To go exercise.html page
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});





// will share any static html files with the browser
app.use(express.static('public'))
// accept incoming POST requests


// db.Workout.create({ name: "Workout" })
//     .then(dbLibrary => {
//         console.log(dbLibrary);
//     })
//     .catch(({ message }) => {
//         console.log(message);
//     });

// app.get("/notes", (req, res) => {
//     db.Note.find({})
//       .then(dbNote => {
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// app.get("/books", (req, res) => {
//     db.Book.find({})
//         .then(dbBook => {
//             res.json(dbBook);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });










// Listener ==================================================
app.listen(PORT, function () {
    console.log(`Serving content on http://localhost:${PORT}`)
})
