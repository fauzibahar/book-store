import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/Database.js";
import BookRoute from "./routes/BoookRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// Middleware for parsing request body
app.use(express.json());

app.use("/api", BookRoute);

app.get("/", (req, res) => {
  res.json("Ini Adalah API Book");
});

app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
