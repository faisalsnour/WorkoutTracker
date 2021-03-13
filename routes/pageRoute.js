var path = require("path");

module.exports = function (app) {

    // is used to take the user to stats.html page when dashboard link is clicked in the index.html 
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // is used to take the user to exercise.html page when new workout or continue workout link is clicked in the index.html
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

};