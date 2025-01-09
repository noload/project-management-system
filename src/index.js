const express = require("express");
const cors = require("cors");
const appRoute = require("./routes/index");

const dotenv = require("dotenv");
const sequelize = require("./config/config");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", appRoute);


(async () => {
    try {
      await sequelize.sync({ force: true }); // Set `alter: true` for production
      console.log('Database synced successfully');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  })();

  app.listen(3000,()=>{
    console.log("server started");
  })