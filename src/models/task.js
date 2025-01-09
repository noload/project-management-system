const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Project = require("./project");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "To Do",
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Task;