// import dependencies
const express = require("express");

// initialize Express to initialize app
const app = express();

// stores path module in path, used to work with file and directory paths in cross-platform way
const path = require("node:path");

/* Express app settings that defines the views property, tells Express where to find views
joins multiple path segments into a single normalized path */
app.set("views", path.join(__dirname, "views"));
// Express app settings that defines the view engine app property, tells Express which templating engine to use
app.set("view engine", "ejs");

// middleware that parses the form data into req.body
app.use(express.urlencoded({ extended: true }));

// imports a local module my server
const indexRouter = require("./routes/indexRouter");

// defines / route and registers indexRouter middleware
app.use("/", indexRouter);

// tells mt server to listen for incoming requests on port 3000
app.listen(3000);
