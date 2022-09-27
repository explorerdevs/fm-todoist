const express = require("express");
const cors = require("cors");
const config = require("./config/index");
const connectDB = require("./config/db");
const TodosRouter = require("./routes/todoRoutes");
const { unknownEndpoint, errorHandler } = require("./middleware/middleware");

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use("/api/v1/todos", TodosRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(config.PORT, () =>
  console.log(`Server listening on ${config.PORT}`)
);
