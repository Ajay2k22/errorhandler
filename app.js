import express from "express";
import router from "./routes/user_routes.js";
import { ErrorHandler } from "./middleware/Error.js";
import { connectDb } from "./config/connectDb.js";
const app = express()

connectDb()

app.listen(5000, () => {
    console.log(`server is runing`)
})

app.use(router)
app.use(ErrorHandler)

