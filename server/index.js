import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

connectDB();

app.use("/auth", authRoutes);

const port = 5000;

app.listen(port, () =>
	console.log(`server started on port: ${port}`.bgMagenta)
);
