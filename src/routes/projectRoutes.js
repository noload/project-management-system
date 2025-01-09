const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const projectController = require('../controllers/projectController');

router.post('/', authenticate, projectController.createProject);

router.get('/', authenticate, projectController.getAllProjects);

router.get('/:id', authenticate, projectController.getProject);

router.put('/:id/assign', authenticate, projectController.assignUsers);

router.put('/:id', authenticate, projectController.updateProject);

router.delete('/:id', authenticate, projectController.deleteProject);

module.exports = router;
