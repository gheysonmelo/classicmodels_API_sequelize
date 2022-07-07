const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const Employee = sequelize.define("employees", {
    employeeNumber: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    lastName: { type: Sequelize.STRING },
    firstName: { type: Sequelize.STRING },
    extension: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    officeCode: { type: Sequelize.STRING },
    reportsTo: { type: Sequelize.STRING },
    jobTitle: { type: Sequelize.STRING },
});

module.exports = Employee;