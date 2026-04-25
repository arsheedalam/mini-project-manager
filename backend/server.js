const express = require("express");
const cors = require("cors");
require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", projectRoutes);
app.use("/api", taskRoutes);



app.listen(8000, () => {
  console.log("Server running on port 8000 🚀");
});