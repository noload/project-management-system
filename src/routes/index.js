const { Router } = require("express");
const projectRoutes = require('./projectRoutes')
const userRoutes = require("./userRoutes")
const taskRoutes = require("./taskRoutes")
const  router = Router();

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
module.exports = router;
