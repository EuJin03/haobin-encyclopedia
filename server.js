import path from "path";
import { config } from "dotenv";
import express from "express";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import allowCrossDomain from "./middleware/corsMiddleware.js";

import factRoutes from "./routes/factRoutes.js";

config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.methodOverride());
app.use(allowCrossDomain);
app.use("/api/facts", factRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
