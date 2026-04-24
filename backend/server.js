const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/projects", require("./routes/projectRoutes"));
app.use("/", require("./routes/taskRoutes"));

app.listen(5000, () => console.log("Server running"));