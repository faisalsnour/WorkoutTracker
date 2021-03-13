var db = require("../model");

module.exports = function (app) {

    // to create new workout in the database - Done
    app.post("/api/workouts", async (req, res) => {
        try {
            const newDatabse = await db.Workout.create({ type: "workout" })
            res.json(newDatabse);
        }
        catch (err) {
            console.log(err)
        }
    })

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



};