const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "mysql://root:pedrinho22@localhost:3306/classicmodels",
    {
        define: {
            freezeTableName: true,
            timestamps: false,
        },
    }
);

module.exports = sequelize;