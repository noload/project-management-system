const express = require('express');
const cors = require('cors')
const appRoute = require("./routes/index")

const dotenv = require('dotenv')
dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use("/api",appRoute)

app.listen(process.env.PORT,()=>{
    console.log("Server started on port 300");
})