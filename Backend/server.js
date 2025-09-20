import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoute from './routes/authRoute.js';
import futureScenarioRoute from './routes/futureScenarioRoute.js'
const app = express(); 

dotenv.config();



const PORT = process.env.PORT || 5100;

app.use(express.json());
app.use(cors());
connectDb ();

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/future-scenarios', futureScenarioRoute);
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
