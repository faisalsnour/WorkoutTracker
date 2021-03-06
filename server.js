const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

// to create connection to the database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


// const db = require("./model");

// the following two line can be used instead of line 36 and 37
// app.use(require("./routes/pageRoute"))
// app.use(require("./routes/api"))

require("./routes/pageRoute")(app);
require("./routes/api")(app);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});