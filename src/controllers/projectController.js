const projectService = require('../services/projectService');

const createProject = async (req, res) => {
  try {
    const project = await projectService.createProject(req.user.id, req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    const project = await projectService.getProject(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const assignUsers = async (req, res) => {
  try {
    const project = await projectService.assgnUserToProject(req.params.id, req.body.userIds);
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await projectService.updateProject(req.user.id, req.params.id, req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const message = await projectService.deleteProject(req.user.id, req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProject,
  assignUsers,
  updateProject,
  deleteProject,
};
