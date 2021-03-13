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




};