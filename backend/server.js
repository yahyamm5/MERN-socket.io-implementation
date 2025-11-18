const express = require("express")
const app = express()
const dotenv = require('dotenv')
const PORT = 3553 || process.env.PORT
const Routes = require("./Routes/auth.routes.js")
const cors = require("cors")
const UserDb = require("./db/UserDb.js")
const cookieParser = require("cookie-parser")

dotenv.config()

app.use(cors({origin: "http://localhost:5173", credentials:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/v1/", Routes)

app.listen(PORT, async () => {
    await UserDb();
    console.log("server is up at port 3553")
})