const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/:projectId', taskController.createTask); 
router.get('/:projectId', taskController.getTasksByProject); 
router.get('/task/:id', taskController.getTaskById); 
router.put('/task/:id', taskController.updateTask); 
router.delete('/task/:id', taskController.deleteTask); 

module.exports = router;
