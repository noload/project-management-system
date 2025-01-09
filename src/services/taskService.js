const Project = require("../models/project");
const Task = require("../models/task");

const createTask = async (projectId, taskData) => {
  const project = await Project.findByPk(projectId);
  if (!project) throw new Error('Project not found');

  return await Task.create({
    ...taskData,
    ProjectId: projectId,
  });
};

const getTasksByProject = async (projectId) => {
  const project = await Project.findByPk(projectId);
  if (!project) throw new Error('Project not found');

  return await Task.findAll({ where: { ProjectId: projectId } });
};

const getTaskById = async (taskId) => {
  const task = await Task.findByPk(taskId);
  if (!task) throw new Error('Task not found');
  return task;
};

const updateTask = async (taskId, taskData) => {
  const task = await Task.findByPk(taskId);
  if (!task) throw new Error('Task not found');

  task.title = taskData.title || task.title;
  task.description = taskData.description || task.description;
  task.status = taskData.status || task.status;

  await task.save();
  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.findByPk(taskId);
  if (!task) throw new Error('Task not found');

  await task.destroy();
  return { message: 'Task successfully deleted' };
};

module.exports = {
  createTask,
  getTasksByProject,
  getTaskById,
  updateTask,
  deleteTask,
};
