const User = require("../models/user");

const createUser = async (userData) => {
  const existingUser = await User.findOne({ where: { email: userData.email } });
  if (existingUser) {
    throw new Error('Email is already registered');
  }
  return await User.create(userData);
};

const getAllUsers = async () => {
  return await User.findAll({
    attributes: { exclude: ['password'] },
  });
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const updateUser = async (userId, userData) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error('User not found');

  user.username = userData.username || user.username;
  user.email = userData.email || user.email;

  if (userData.password) {
    user.password = userData.password; 
  }

  await user.save();
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error('User not found');

  await user.destroy();
  return { message: 'User successfully deleted' };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
