const express = require("express");
const route = require("./router/students.route");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/students", route);

app.listen(PORT, () => console.log(`Server runs on ${PORT}`));
