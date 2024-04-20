import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/Database.js";
import BookRoute from "./routes/BoookRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(BookRoute);

app.get("/", (req, res) => {
  res.json("Welcome To Book Store API");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
