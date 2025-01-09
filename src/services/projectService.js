const Project = require("../models/project");
const User = require("../models/user");

const createProject = async (userId, projectData) => {
  const project = await Project.create({
    title: projectData.title,
    description: projectData.description,
    ownerId:projectData.ownerId
  });

  await project.addUser(userId);

  return project;
};

const getAllProjects = async () => {
  return await Project.findAll({
    include: [
      {
        model: User,
        through: { attributes: [] },
      },
    ],
  });
};

const getProject = async (projectId) => {
  const project = await Project.findByPk(projectId, {
    include: [
      {
        model: User,
        through: { attributes: [] },
      },
    ],
  });

  if (!project) {
    throw new Error("Project not  found");
  }

  return project;
};

const assgnUserToProject = async (projectId, userIds) => {
  const project = await Project.findByPk(projectId);

  if (!project) {
    throw new Error("Project  not found");
  }

  const users = await User.findAll({ where: { id: userIds } });

  if (users.length !== userIds.length) {
    throw new Error("Some User were not found");
  }

  await project.addUser(users);
  return project;
};

const updateProject = async (userId, projectId, projectData) => {
  const project = await Project.findByPk(projectId, {
    include: [
      {
        model: User,
        through: { attributes: [] },
      },
    ],
  });

  if (!project) {
    throw new Error("Project  not found");
  }

  const isOwner = project.ownerId == userId;

  if (!isOwner) throw new Error("You are not the project  owner");

  project.title = projectData.title | project.title;
  project.description = projectData.description | project.description;

  await project.save();

  return project;
};

const deleteProject = async (userId, projectId) => {
  const project = await Project.findByPk(projectId, {
    include: [
      {
        model: User,
        through: [{ attributes: [] }],
      },
    ],
  });

  if(!project) throw new Error('Project not found');

  const isOwner = project.ownerId == userId;
  if(!isOwner) throw new Error('You are  not the project owner')

  await project.destroy();

  return {message:"Prject successfully deleted"}
};


module.exports ={assgnUserToProject,deleteProject,createProject,updateProject,getAllProjects,getProject}