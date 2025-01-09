const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./user");
const Task = require("./task");

const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ownerId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    }
  },
  {
    timestamps: true,
  }
);

Project.belongsTo(User, { as: 'Owner', foreignKey: 'ownerId' }); 
Project.belongsToMany(User,{through:'UserProjects'});

Project.hasMany(Task)

module.exports = Project