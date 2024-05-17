import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";

//Imports for routes
import userRoute from "./routes/userRoutes.js";

//Set config.env file path
config({
  path: "config/config.env",
  encoding: "utf-8",
});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//using routes
app.use("/api/v1", userRoute);

export default app;

//Error Middleware
