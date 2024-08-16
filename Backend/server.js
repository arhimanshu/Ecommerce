import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import registerController from "./controllers/authController.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5174", // Replace with your client URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
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
