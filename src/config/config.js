const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:"localhost",
        dialect:"postgres",
        logging:console.log,
        port:process.env.DB_PORT
    }

)

module.exports = sequelize;