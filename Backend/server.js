import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import registerController from "./controllers/authController.js";

dotenv.config();
const app = express();

//db connect
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api", authRoute);

//rest api
app.get("/", (req, res) => {
  res.send({ message: "welcome to my ecomm app" });
});
// app.post("/rere",registerController)

//port
// const PORT = 8080; not required after dotenv
const PORT = process.env.PORT || 8080;

//listen app

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
