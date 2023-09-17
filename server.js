import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";
import plantRoute from "./routes/plantRoute.js";

import cors from "cors";

// config dotenv
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/plant", plantRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Med-Plant project</h1>");
});

//port
const port = process.env.port;
// listen
app.listen(port, () => {
  console.log(`server running on ${port}`.bgCyan.black);
});
