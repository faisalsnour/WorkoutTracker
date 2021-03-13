var db = require("../model");

module.exports = function (app) {

    // to create new workout - Done
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({ type: "Workout" }, (err, found) => {
            if (err) {
                console.log(err);
            } else {
                res.json(found);
                console.log(found)
            }
        })
    })

    // to get all workout - Done
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, found) => {
            if (err) {
                console.log(err);
            } else {
                res.json(found);
                console.log(found)
            }
        });
    });

    // api to get the last workout - Done
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, found) => {
            if (err) {
                console.log(err);
            } else {
                res.json(found);
                console.log(found)
            }
        });
    });

    // to take workout id and add new excercise to it - Done
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $push: {
                    exercises: [
                        {
                            "type": req.body.type,
                            "name": req.body.name,
                            "duration": req.body.duration,
                            "distance": req.body.distance,
                            "weight": req.body.weight,
                            "reps": req.body.reps,
                            "sets": req.body.sets
                        }
                    ]
                }
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            }
        );
    });
};