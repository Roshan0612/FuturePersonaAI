import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
const app = express(); 

dotenv.config();



const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
connectDb ();

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
