const express = require('express')
const app = express()
let mongoose = require("mongoose");
const mongojs = require("mongojs");

// const apirouter = require('./app/router')

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const PORT = process.env.PORT || 8088

// will share any static html files with the browser
app.use(express.static('public'))
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const databaseUrl = "workout";
const collections = ["workouts"];


const db = mongojs(databaseUrl, collections);

let workoutSeed =
{
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
        {
            type: "resistance",
            name: "Bicep Curl",
            duration: 20,
            weight: 100,
            reps: 10,
            sets: 4
        }
    ]
}
// [
//     {
//         day: new Date().setDate(new Date().getDate() - 10),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Bicep Curl",
//                 duration: 20,
//                 weight: 100,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date().setDate(new Date().getDate() - 9),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Lateral Pull",
//                 duration: 20,
//                 weight: 300,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date().setDate(new Date().getDate() - 8),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Push Press",
//                 duration: 25,
//                 weight: 185,
//                 reps: 8,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date().setDate(new Date().getDate() - 7),
//         exercises: [
//             {
//                 type: "cardio",
//                 name: "Running",
//                 duration: 25,
//                 distance: 4
//             }
//         ]
//     },
//     {
//         day: new Date().setDate(new Date().getDate() - 6),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Bench Press",
//                 duration: 20,
//                 weight: 285,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date().setDate(new Date().getDate() - 5),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Bench Press",
//                 duration: 20,
//                 weight: 300,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date(new Date().setDate(new Date().getDate() - 4)),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Quad Press",
//                 duration: 30,
//                 weight: 300,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date(new Date().setDate(new Date().getDate() - 3)),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Bench Press",
//                 duration: 20,
//                 weight: 300,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     },
//     {
//         day: new Date(new Date().setDate(new Date().getDate() - 2)),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Military Press",
//                 duration: 20,
//                 weight: 300,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     }
// ];

app.post("/api/workouts", (req, res) => {

    db.workouts.insertMany(workoutSeed, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            console.log(data)
            res.send(data);
        }
    });
});




app.post("/api/workouts/:id", (req, res) => {

    let enteredWorkout = {
        day: new Date().setDate(new Date().getDate() - 10),
        exercises: [
            {
                // _id: mongojs.ObjectId(req.params.id),
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets
            }
        ]
    }

    console.log(req.body)
    // const insertedData = req.body
    {
        db.excercises.insert(
            enteredWorkout,
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    console.log(data)
                    res.send(data);
                }
            }
        );
    }
});




// db.excercises.insertMany(workoutSeed)


// apirouter(app)

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

// db.Library.create({ name: "Campus Library" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });





// Listener ==================================================
app.listen(PORT, function () {
    console.log(`Serving content on http://localhost:${PORT}`)
})
