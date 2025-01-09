const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const bcrypt = require('bcryptjs')

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);


User.beforeSave(async(user)=>{
    if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password)
    }
})

User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password,this.password)
}

module.exports = User;