import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth_route.js";
import {connectDB} from "./src/lib/db.js";
dotenv.config();
const app = express();
const PORT =process.env.PORT; 

app.use(express.json());
// middleware
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.PORT}`);
    connectDB();
})