import express from "express"
import colors from "colors"
import dotenv from "dotenv"
dotenv.config()

import connectDB from "./config/db.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDB()

const port = 5000

app.listen(port,()=>console.log(`server started on port: ${port}`.bgMagenta))