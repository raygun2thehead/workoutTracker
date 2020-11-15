const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const morgan = require("morgan")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan('dev'));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: true
});

// routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});