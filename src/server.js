require("dotenv/config");
require("express-async-errors");
const AppError = require("./utils/AppError");
const migrationsRun = require("./database/sqlite/migrations");
const uploadConfig = require("./configs/upload");
const cors = require("cors");

const express = require("express");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3333;

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

migrationsRun();

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
