const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const mongoose = require("mongoose");
const path = require("path");
const timeout = require("connect-timeout");

const api = require("./api");
const { EventEmitter } = require("stream");
const app = express();

const emitter = new EventEmitter();

require("dotenv").config();
require("events").EventEmitter.prototype._maxListeners = 100;

emitter.setMaxListeners(0);

const PORT = process.env.PORT || 8080;

// Step 1 DB connection
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.json({ limit: "1000mb" }));
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.use(express.urlencoded({ limit: "1000mb", extended: true }));

// Step 3: Initialization
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// Step 4: HTTP request logger
app.use(morgan("tiny"));

// Step 5: API Routes
app.use("/api", api);

// Step 6: The timeout
app.use(timeout("10000s"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
