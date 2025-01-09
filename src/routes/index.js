const { Router } = require("express");
const projectRoutes = require('./projectRoutes')
const  router = Router();

router.use("/projects",projectRoutes)

module.exports = router;
